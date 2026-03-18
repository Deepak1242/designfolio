import React from 'react';

const StarBorder = ({
  as = 'button',
  className = '',
  color = '#FB32EC',
  speed = '4s',
  children,
  onClick,
  ...rest
}) => {
  const Component = as;
  return (
    <Component 
      className={`relative inline-block py-[1px] overflow-hidden rounded-full ${className} hover:shadow-[0_0_40px_rgba(251,50,236,0.5)] transition-shadow duration-300`} 
      onClick={onClick}
      {...rest}
    >
      <div 
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full z-0 animate-star-movement-bottom pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }} 
      />
      <div 
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full z-0 animate-star-movement-top pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }} 
      />
      <div className="relative z-10 w-full h-full bg-[#020617] border border-white/10 text-white text-center text-sm tracking-[0.2em] font-sans font-bold uppercase py-5 px-10 rounded-full hover:bg-gradient-to-r hover:from-[#FB32EC]/20 hover:to-[#020617] transition-colors duration-300 ease-in-out">
        {children}
      </div>
    </Component>
  )
}

export default StarBorder;
