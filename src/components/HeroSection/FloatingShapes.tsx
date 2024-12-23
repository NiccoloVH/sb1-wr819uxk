import React from 'react';
import FloatingElement from '../FloatingElement';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <FloatingElement delay={0}>
        <div className="absolute top-20 left-[20%] w-16 h-16 bg-navy-200/20 rounded-xl" />
      </FloatingElement>
      <FloatingElement delay={1}>
        <div className="absolute top-40 right-[20%] w-20 h-20 bg-navy-200/20 rounded-full" />
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute bottom-20 left-[30%] w-12 h-12 bg-navy-200/20 rounded-lg" />
      </FloatingElement>
    </div>
  );
}