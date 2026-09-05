import React from 'react';

const BackgroundGlows = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top Left Indigo Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Center Purple Glow */}
      <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[150px] animate-bounce" style={{ animationDuration: '25s' }} />
      
      {/* Bottom Left Cyan/Blue Glow */}
      <div className="absolute bottom-[-10%] left-[5%] w-[45%] h-[45%] rounded-full bg-cyan-900/15 blur-[130px] animate-pulse" style={{ animationDuration: '12s' }} />
      
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
    </div>
  );
};

export default BackgroundGlows;
