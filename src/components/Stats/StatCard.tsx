import React from 'react';
import { motion } from 'framer-motion';
import Card3D from '../Card3D';

interface StatCardProps {
  mainStat: string;
  unit: string;
  description: string;
  delay?: number;
}

export default function StatCard({ mainStat, unit, description, delay = 0 }: StatCardProps) {
  return (
    <Card3D>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-lg shadow-lg text-center"
      >
        <div className="flex items-baseline justify-center mb-2">
          <span className="text-4xl font-bold text-navy-600">{mainStat}</span>
          <span className="text-xl font-medium text-navy-400 ml-1">{unit}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Card3D>
  );
}