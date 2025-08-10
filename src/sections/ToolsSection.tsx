import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ExternalLink, MessageSquare, Phone, Zap, Calendar, Database, Grid, Workflow } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  category: string;
  website: string;
}

const tools: Tool[] = [
  {
    id: 'voiceflow',
    name: 'Voiceflow',
    description: 'Visual conversation design platform for building voice and chat assistants.',
    features: [
      'Customizable knowledge base for AI',
      'Multi-channel deployment',
      'Advanced analytics and testing',
      'API Integrations'
    ],
    icon: <MessageSquare className="h-8 w-8" />,
    category: 'Conversation Design',
    website: 'https://voiceflow.com'
  },
  {
    id: 'vapi',
    name: 'Vapi AI',
    description: 'Voice AI platform for building intelligent phone agents and voice assistants.',
    features: [
      'Multilingual support',
      'Custom voice models',
      'Automation function',
      'Scalability for high call volumes'
    ],
    icon: <Phone className="h-8 w-8" />,
    category: 'Voice AI',
    website: 'https://vapi.ai'
  },
  {
    id: 'bolt',
    name: 'Bolt AI',
    description: 'AI-powered development platform for rapid prototyping and application building.',
    features: [
      'Fast deployment',
      'Full-stack development',
    ],
    icon: <Zap className="h-8 w-8" />,
    category: 'Development',
    website: 'https://bolt.new'
  },
  {
    id: 'calendly',
    name: 'Calendly',
    description: 'Automated scheduling platform that eliminates back-and-forth emails.',
    features: [
      'Automated scheduling',
      'Calendar integrations',
      'Custom booking pages',
    ],
    icon: <Calendar className="h-8 w-8" />,
    category: 'Scheduling',
    website: 'https://calendly.com'
  },
  {
    id: 'sheets',
    name: 'Google Sheets',
    description: 'Cloud-based spreadsheet platform with powerful automation capabilities.',
    features: [
      'Real-time collaboration',
      'Apps Script automation',
      'API integrations',
    ],
    icon: <Grid className="h-8 w-8" />,
    category: 'Data Management',
    website: 'https://sheets.google.com'
  },
  {
    id: 'airtable',
    name: 'Airtable',
    description: 'Low-code platform combining spreadsheet simplicity with database power.',
    features: [
      'Flexible database structure',
      'Custom views and filters',
      'Automation workflows',
    ],
    icon: <Database className="h-8 w-8" />,
    category: 'Database',
    website: 'https://airtable.com'
  },
  {
    id: 'make',
    name: 'Make.com',
    description: 'Visual automation platform for connecting apps and automating workflows.',
    features: [
      '1000+ app integrations',
      'Advanced data processing',
      'Error handling and monitoring'
    ],
    icon: <Workflow className="h-8 w-8" />,
    category: 'Automation',
    website: 'https://make.com'
  }
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group bg-white dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-200 dark:border-secondary-700 overflow-hidden hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg text-white">
              {tool.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{tool.name}</h3>
              <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{tool.category}</span>
            </div>
          </div>
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label={`Visit ${tool.name} website`}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
          {tool.description}
        </p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {tool.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-secondary-600 dark:text-secondary-300">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-secondary-50 dark:bg-secondary-700/50 border-t border-secondary-200 dark:border-secondary-600">
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
        >
          Learn More
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Automation Tools" 
          subtitle="Powerful platforms I use to build intelligent automation solutions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}