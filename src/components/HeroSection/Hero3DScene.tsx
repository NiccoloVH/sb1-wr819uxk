import React from 'react';
import { motion } from 'framer-motion';
import FloatingElement from '../FloatingElement';

export default function Hero3DScene() {
  return (
    <div className="lg:w-1/2 mt-24 lg:mt-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px]"
      >
        {/* Main floating cube */}
        <FloatingElement delay={0}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 bg-navy-600 rounded-xl shadow-2xl" />
          </div>
        </FloatingElement>

        {/* Decorative elements */}
        <FloatingElement delay={1.2}>
          <div className="absolute top-[30%] right-[30%]">
            <div className="w-20 h-20 bg-navy-400 rounded-full shadow-xl" />
          </div>
        </FloatingElement>

        <FloatingElement delay={0.8}>
          <div className="absolute bottom-[30%] left-[30%]">
            <div className="w-24 h-24 bg-navy-500 rounded-lg shadow-xl" />
          </div>
        </FloatingElement>

        {/* Code snippet decoration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-[20%] right-[20%] bg-white p-4 rounded-lg shadow-xl"
        >
          <pre className="text-sm text-navy-600">
            <code>{`const design = "creative";
const code = "clean";`}</code>
          </pre>
        </motion.div>
      </motion.div>
    </div>
  );
}