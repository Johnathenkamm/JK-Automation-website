import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Check, Calendar, Rocket, DollarSign, User } from 'lucide-react';

interface PricingOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  highlight?: boolean;
}

const pricingOptions: PricingOption[] = [
  {
    id: 'one-time',
    title: 'One-Time Payment',
    description: 'Complete project delivery with full ownership and ongoing support included.',
    icon: <User className="h-8 w-8" />,
    features: [
      'Full project development',
      'Complete source code ownership',
      'Initial training and setup',
      '30 days of support included',
      'Documentation and handover',
      'One revision round included'
    ]
  },
  {
    id: 'monthly',
    title: 'Month-to-Month',
    description: 'Flexible ongoing development with continuous improvements and maintenance.',
    icon: <Calendar className="h-8 w-8" />,
    features: [
      'Ongoing development and updates',
      'Monthly feature additions',
      'Continuous optimization',
      'Priority support and maintenance',
      'Performance monitoring',
      'Unlimited revisions'
    ],
    highlight: true
  }
];

function PricingCard({ option }: { option: PricingOption }) {
  return (
    <div className={`relative bg-white dark:bg-secondary-800 rounded-xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      option.highlight 
        ? 'border-primary-500 ring-2 ring-primary-500/20' 
        : 'border-secondary-200 dark:border-secondary-700'
    }`}>
      {option.highlight }
      
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className={`p-3 rounded-lg text-white mr-4 ${
            option.highlight 
              ? 'bg-gradient-to-br from-primary-500 to-accent-600' 
              : 'bg-gradient-to-br from-secondary-500 to-secondary-600'
          }`}>
            {option.icon}
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">{option.title}</h3>
        </div>
        
        <p className="text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
          {option.description}
        </p>
        
        <div className="space-y-4 mb-8">
          <h4 className="font-semibold text-secondary-900 dark:text-white mb-4">What's included:</h4>
          <ul className="space-y-3">
            {option.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-600 dark:text-secondary-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
          option.highlight
            ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl'
            : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-900 dark:text-white hover:bg-secondary-200 dark:hover:bg-secondary-600'
        }`}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Project Pricing" 
          subtitle="Choose the payment structure that works best for your business needs"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {pricingOptions.map((option) => (
            <PricingCard key={option.id} option={option} />
          ))}
        </div>
        
        {/* Cost Information */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-white dark:bg-secondary-800 rounded-xl shadow-lg border border-secondary-200 dark:border-secondary-700 p-8 max-w-md mx-auto">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg text-white">
                <DollarSign className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                  $500 - $2,000
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  per project or montly payment
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Project costs vary based on complexity, features, and integration requirements. 
            Contact me for a detailed quote tailored to your specific automation needs.
          </p>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg shadow-lg">
            <Rocket className="mr-2 h-5 w-5" />
            <span className="font-medium">Ready to automate your business processes?</span>
          </div>
        </div>
      </div>
    </section>
  );
}