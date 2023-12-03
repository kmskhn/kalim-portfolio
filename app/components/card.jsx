"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

export const Card = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
  
	function onMouseMove({ currentTarget, clientX, clientY }) {
	  const { left, top } = currentTarget.getBoundingClientRect();
	  mouseX.set(clientX - left);
	  mouseY.set(clientY - top);
	}
	const maskImage = `radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	const style = { maskImage, WebkitMaskImage: maskImage };
  
	return (
	  <div
		onMouseMove={onMouseMove}
		className=" backdrop-blur-sm shadow-sm hover:shadow-lg shadow-cyan-400/20 hover:shadow-cyan-500/60 overflow-hidden relative duration-700 border rounded-xl md:gap-8 hover:border-zinc-400/50 border-zinc-800 "
	  >
		<div className="pointer-events-none">
		  <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
		  <motion.div
			className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
			style={style}
		  />
		  <motion.div
			className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
			style={style}
		  />
		</div>
		{children}
	  </div>
	);
  };
  
