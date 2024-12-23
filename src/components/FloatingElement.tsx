import { motion } from 'framer-motion';
import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FloatingElement({ children, delay = 0 }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -20, 0],
        rotateX: [0, 5, 0],
        rotateY: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}