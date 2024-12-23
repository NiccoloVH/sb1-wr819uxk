import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Over Mij</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Hoi! Ik ben Niccolo van Heteren, een 17-jarige webdesigner en developer met een passie voor het creëren van moderne digitale ervaringen.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mijn Verhaal</h2>
            <p className="text-gray-600 mb-6">
              Al vanaf jonge leeftijd ben ik gefascineerd door technologie en design. Wat begon als een hobby in programmeren, is uitgegroeid tot een ware passie voor het bouwen van websites en webapplicaties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mijn Expertise</h2>
            <p className="text-gray-600 mb-6">
              Ik specialiseer me in het ontwikkelen van moderne, responsieve websites met focus op:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Modern webdesign met oog voor detail</li>
              <li>Gebruiksvriendelijke interfaces</li>
              <li>Responsive development</li>
              <li>Performance optimalisatie</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Waarom Interacture?</h2>
            <p className="text-gray-600 mb-6">
              Interacture staat voor de perfecte balans tussen interactief design en architectuur van code. Ik geloof dat een website niet alleen mooi moet zijn, maar ook technisch perfect moet functioneren.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}