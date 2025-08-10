import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FileText, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/WhatsApp Image 2024-07-27 at 13.19.22_86391502.jpg" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full border-2 border-primary-500 rounded-lg"></div>
            </div>
          </div>
          
          {/* Content side */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-secondary-800 dark:text-secondary-200">
              Who am I?
            </h3>
            
            <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
              As a computer engineering graduate, I faced a challenge: despite the hype around AI, my university professors focused solely on large language model theory, leaving university without the practical guidance on building AI systems. Frustrated by the lack of step-by-step resources and vague online content about profiting from AI, I took matters into my own hands. Determined to find any step-by-step resources. I found a video showcasing an AI chatbot built for personal and business use, I taught myself the AI software programming in the video, became more profeicent using the  tools and techniques needed to create accessible AI chatbots. Now, knowing the skillset needed for AI chatbots, I'm driven to develop innovative AI solutions that empower others and enhance lives.
            </p>
            
            <p className="text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
              I'll always be studying better ways to build and innovate AI chatbots. Will find new tools to study and use in my work. I know I'm new to AI automation, I hope we get to work together in the near future.
              Thank you.
            </p>
            
            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-secondary-500 dark:text-secondary-400">Experience in Workforce</div>
                  <div className="font-medium text-secondary-900 dark:text-secondary-200">1+ Years</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-secondary-500 dark:text-secondary-400">Degree</div>
                  <div className="font-medium text-secondary-900 dark:text-secondary-200">B.S. Computer Engineer</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-secondary-500 dark:text-secondary-400">Location</div>
                  <div className="font-medium text-secondary-900 dark:text-secondary-200">San Antonio, TX</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-secondary-500 dark:text-secondary-400">Resume</div>
                  <a 
                    href="#" 
                    className="font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}