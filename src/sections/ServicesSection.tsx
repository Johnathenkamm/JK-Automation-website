import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Bot, Phone, Workflow, Zap, Database, Check } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 'chatbot-development',
    title: 'AI Chatbot Development',
    description: 'Custom conversational AI solutions that understand and respond to your customers naturally.',
    icon: <Bot className="h-8 w-8" />,
    features: [
      'Better engagement',
      'Multi-platform deployment',
      'Custom training data',
      'Data collection and analysis'
    ]
  },
  {
    id: 'voice-automation',
    title: 'Voice AI Solutions',
    description: 'Intelligent voice assistants and phone automation systems for seamless customer interactions.',
    icon: <Phone className="h-8 w-8" />,
    features: [
      'Multi-language support',
      'Interactive voice response',
      'Call routing automation',
      'Lead qualification'
    ]
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamline your business processes with intelligent automation that saves time and reduces errors.',
    icon: <Workflow className="h-8 w-8" />,
    features: [
      'Process optimization',
      'App integrations',
      'Data synchronization',
      'Error handling and monitoring'
    ]
  }
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-white dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-200 dark:border-secondary-700 p-8 hover:-translate-y-2">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg text-white mr-4">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{service.title}</h3>
      </div>
      
      <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-secondary-600 dark:text-secondary-300">
            <Check className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="AI Automation Services" 
          subtitle="Transforming businesses through intelligent automation solutions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}