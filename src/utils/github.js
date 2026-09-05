const GITHUB_USERNAME = 'tulasip682-wq';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const getCachedData = (key) => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error reading from localStorage cache:', e);
  }
  return null;
};

const setCachedData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.error('Error writing to localStorage cache:', e);
  }
};

// Helper keys
const CACHE_KEY_PROFILE = () => `github_profile_${GITHUB_USERNAME}`;
const CACHE_KEY_REPOS = () => `github_repos_${GITHUB_USERNAME}`;

export const fetchGithubProfile = async () => {
  const cached = getCachedData(CACHE_KEY_PROFILE());
  if (cached) return cached;

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch GitHub profile');
    const data = await response.json();
    setCachedData(CACHE_KEY_PROFILE(), data);
    return data;
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    // Fallback static profile data in case of complete API failure or offline development
    return getFallbackProfile();
  }
};

export const fetchGithubRepos = async () => {
  const cached = getCachedData(CACHE_KEY_REPOS());
  if (cached) return cached;

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    if (!response.ok) throw new Error('Failed to fetch GitHub repositories');
    const data = await response.json();
    setCachedData(CACHE_KEY_REPOS(), data);
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return getFallbackRepos();
  }
};

// Fallbacks for offline development/API blocks
const getFallbackProfile = () => ({
  login: GITHUB_USERNAME,
  name: 'Tulasi Priya G',
  avatar_url: 'https://avatars.githubusercontent.com/u/161474581?v=4', // Dynamic default fallback
  bio: 'Computer Science with Data Analytics Student | Full Stack MERN Developer | Java Developer',
  followers: 12,
  following: 15,
  public_repos: 8,
  html_url: `https://github.com/${GITHUB_USERNAME}`,
  company: 'Student',
  location: 'Tamil Nadu, India'
});

const getFallbackRepos = () => [
  {
    id: 1,
    name: 'ShopSphere-Dashboard',
    description: 'A complete MERN Stack Sales Analytics Dashboard featuring real-time updates and interactive charts.',
    html_url: `https://github.com/${GITHUB_USERNAME}/ShopSphere-Dashboard`,
    stargazers_count: 5,
    forks_count: 2,
    language: 'JavaScript',
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'TravelEase',
    description: 'Responsive travel booking web application built using HTML, CSS, JavaScript and Bootstrap.',
    html_url: `https://github.com/${GITHUB_USERNAME}/TravelEase`,
    stargazers_count: 3,
    forks_count: 1,
    language: 'HTML',
    updated_at: new Date().toISOString()
  }
];

export const processRepoStats = (repos) => {
  if (!repos || !Array.isArray(repos)) return { languages: [], totalStars: 0, topRepos: [], latestRepos: [] };

  const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
  
  // Aggregate languages
  const languagesMap = {};
  repos.forEach(repo => {
    if (repo.language) {
      languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
    }
  });

  // Calculate percentages for languages
  const totalReposWithLanguage = Object.values(languagesMap).reduce((sum, count) => sum + count, 0);
  const languages = Object.entries(languagesMap)
    .map(([name, count]) => ({
      name,
      percentage: totalReposWithLanguage > 0 ? Math.round((count / totalReposWithLanguage) * 100) : 0,
      count
    }))
    .sort((a, b) => b.count - a.count);

  // Get Top Repos (by stars + forks)
  const topRepos = [...repos]
    .sort((a, b) => {
      const scoreA = (a.stargazers_count || 0) * 2 + (a.forks_count || 0);
      const scoreB = (b.stargazers_count || 0) * 2 + (b.forks_count || 0);
      return scoreB - scoreA;
    })
    .slice(0, 4);

  // Get Latest Repos (by updated_at)
  const latestRepos = [...repos]
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 4);

  return {
    languages,
    totalStars,
    topRepos,
    latestRepos
  };
};
