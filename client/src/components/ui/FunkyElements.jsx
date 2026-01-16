import { motion } from 'framer-motion';

export const FloatingImage = ({ src, alt, className, speed = 2, delay = 0 }) => (
  <motion.img
    src={src}
    alt={alt}
    className={`absolute pointer-events-none select-none z-10 ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: speed,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
  />
);

export const RotatingBadge = ({ text = "Scroll • Down • ", className }) => (
  <div className={`absolute pointer-events-none select-none z-10 flex items-center justify-center ${className}`}>
    <motion.div
      className="w-24 h-24 rounded-full border-2 border-accent-lime flex items-center justify-center bg-white/10 backdrop-blur-sm relative"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="12" fill="currentColor" className="uppercase font-bold font-mono tracking-widest text-gallery-text">
          <textPath xlinkHref="#circle">
            {text}{text}{text}
          </textPath>
        </text>
      </svg>
    </motion.div>
    <span className="absolute text-2xl">🔥</span>
  </div>
);

export const FunkySpinner = ({ className }) => (
  <motion.div
    className={`absolute z-10 ${className}`}
    animate={{ rotate: 360 }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 50 50" className="w-16 h-16 text-accent-pink">
      <path d="M25 0 L50 25 L25 50 L0 25 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="25" cy="25" r="5" fill="currentColor" />
    </svg>
  </motion.div>
);
