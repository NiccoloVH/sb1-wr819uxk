import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import ProcessIcon from './ProcessIcon';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ProcessStep({ icon: Icon, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <ProcessIcon Icon={Icon} />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}