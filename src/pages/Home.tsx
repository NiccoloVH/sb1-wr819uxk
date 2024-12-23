import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import Card3D from '../components/Card3D';
import FloatingShapes from '../components/HeroSection/FloatingShapes';
import HeroContent from '../components/HeroSection/HeroContent';
import Hero3DScene from '../components/HeroSection/Hero3DScene';
import StatsSection from '../components/Stats/StatsSection';
import ProcessSection from '../components/Process/ProcessSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <HeroContent />
            <Hero3DScene />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Wat ik bied
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card3D className="h-full">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <Code className="h-8 w-8 text-navy-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Development</h3>
                <p className="text-gray-600">
                  Gebruik van de nieuwste technologieën voor snelle en schaalbare websites
                </p>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <Palette className="h-8 w-8 text-navy-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Uniek Design</h3>
                <p className="text-gray-600">
                  Op maat gemaakte designs die perfect passen bij jouw merk
                </p>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <Zap className="h-8 w-8 text-navy-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Optimale Prestaties</h3>
                <p className="text-gray-600">
                  Snelle laadtijden en optimale gebruikerservaring
                </p>
              </div>
            </Card3D>
          </div>
        </div>
      </section>
    </div>
  );
}