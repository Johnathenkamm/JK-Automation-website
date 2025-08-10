import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center">
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
      </div>
    </div>
  );
}