import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessIconProps {
  Icon: LucideIcon;
}

export default function ProcessIcon({ Icon }: ProcessIconProps) {
  return (
    <motion.div
      animate={{
        x: [0, 5, 0],
        y: [0, -5, 0],
        rotateZ: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4"
    >
      <Icon className="h-8 w-8 text-navy-600" />
    </motion.div>
  );
}