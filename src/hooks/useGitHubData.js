import { useState, useEffect } from 'react';
import { fetchGithubProfile, fetchGithubRepos, processRepoStats } from '../utils/github';

export const useGitHubData = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [stats, setStats] = useState({
    languages: [],
    totalStars: 0,
    topRepos: [],
    latestRepos: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        setLoading(true);
        const [profileData, reposData] = await Promise.all([
          fetchGithubProfile(),
          fetchGithubRepos()
        ]);

        if (isMounted) {
          setProfile(profileData);
          setRepos(reposData);
          setStats(processRepoStats(reposData));
          setError(null);
        }
      } catch (err) {
        console.error('Error in useGitHubData hook:', err);
        if (isMounted) {
          setError(err.message || 'Failed to load GitHub data');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { profile, repos, stats, loading, error };
};
