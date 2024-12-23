import React from 'react';
import { motion } from 'framer-motion';

export default function LogoIcon() {
  return (
    <motion.div
      className="relative w-8 h-8"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Main cube */}
      <motion.div
        className="absolute inset-0 bg-navy-600 rounded-lg"
        animate={{
          rotateY: [0, 180, 360],
          rotateX: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating elements */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-navy-400 rounded-full"
        animate={{
          y: [-2, 2, -2],
          x: [2, -2, 2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Code bracket element */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-white font-mono text-lg"
        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
        animate={{
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"<>"}
      </motion.div>
    </motion.div>
  );
}