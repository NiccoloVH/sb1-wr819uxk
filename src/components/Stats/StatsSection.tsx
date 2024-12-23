import React from 'react';
import StatCard from './StatCard';

export default function StatsSection() {
  return (
    <section className="py-16 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          De Impact van Webdesign
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            mainStat="0.05"
            unit="sec"
            description="Tijd waarin gebruikers een eerste indruk vormen, waarvan 94% design-gerelateerd is"
            delay={0}
          />
          <StatCard
            mainStat="46"
            unit="%"
            description="van de consumenten beoordeelt de betrouwbaarheid op basis van visueel design"
            delay={0.2}
          />
          <StatCard
            mainStat="132"
            unit="%"
            description="gemiddelde stijging in online omzet door professioneel design"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}