import React from 'react';
import { MessageSquare, Palette, Code as CodeIcon, Rocket } from 'lucide-react';
import ProcessStep from './ProcessStep';

export default function ProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Hoe werk ik?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            icon={MessageSquare}
            title="1. Gesprek"
            description="We bespreken je wensen en doelen voor je nieuwe website"
            delay={0}
          />
          <ProcessStep
            icon={Palette}
            title="2. Design"
            description="Ik maak een uniek ontwerp dat perfect past bij jouw merk"
            delay={0.2}
          />
          <ProcessStep
            icon={CodeIcon}
            title="3. Ontwikkeling"
            description="Het design wordt omgezet naar een werkende website"
            delay={0.4}
          />
          <ProcessStep
            icon={Rocket}
            title="4. Launch"
            description="Je website gaat live en is klaar voor bezoekers"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}