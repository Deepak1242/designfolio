import { motion } from 'framer-motion';

export const Spring = ({ className = "" }) => (
    <motion.svg
        viewBox="0 0 100 20"
        className={`w-24 h-6 ${className}`}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
    >
        <motion.path
            d="M2.5,10 C10,10 5,2 15,2 C25,2 20,18 30,18 C40,18 35,2 45,2 C55,2 50,18 60,18 C70,18 65,2 75,2 C85,2 80,18 90,18"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </motion.svg>
);

export const Curl = ({ className = "" }) => (
    <motion.svg
        viewBox="0 0 50 50"
        className={`w-12 h-12 ${className}`}
        initial={{ pathLength: 0, rotate: -20 }}
        whileInView={{ pathLength: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
    >
        <motion.path
            d="M10,40 C10,10 40,10 40,40 C40,20 20,20 20,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </motion.svg>
);

export const Underline = ({ className = "" }) => (
    <motion.svg
        viewBox="0 0 200 10"
        className={`w-full h-3 ${className}`}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
    >
        <motion.path
            d="M2,5 Q50,8 100,2 T198,5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </motion.svg>
);

export const Star = ({ className = "" }) => (
    <motion.svg
        viewBox="0 0 24 24"
        className={`w-8 h-8 ${className}`}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
        <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="currentColor"
            stroke="none"
        />
    </motion.svg>
);
