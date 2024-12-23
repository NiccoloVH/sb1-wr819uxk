import React from 'react';
import { motion } from 'framer-motion';
import LogoIcon from './LogoIcon';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <LogoIcon />
      <motion.span 
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy-200 to-white"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        Interacture
      </motion.span>
    </motion.div>
  );
}