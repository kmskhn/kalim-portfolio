"use client";

export const Card = ({ children, className }) => {
  
	return (
	  <div
		className={className+` backdrop-blur-sm shadow-sm hover:shadow-lg shadow-cyan-400/20 hover:shadow-cyan-500/60 relative duration-700 border rounded-xl md:gap-8 hover:border-zinc-400/50 border-zinc-800 `}
	  >
		{children}
	  </div>
	);
  };
  
