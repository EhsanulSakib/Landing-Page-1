"use client";
import { motion } from "framer-motion";

interface GlowingAnimationProps {
    children: React.ReactNode;
    className?: string;
  }
  const GlowingAnimation: React.FC<GlowingAnimationProps> = ({ children }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.03, 1], // Scale up and down
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlowingAnimation;
