"use client";
import { motion } from "framer-motion";

interface FadeUpAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const FadeUpAnimation: React.FC<FadeUpAnimationProps> = ({ children, className }) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
