import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-white to-primary-50 dark:from-secondary-900 dark:to-secondary-800"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-400 dark:bg-primary-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-accent-400 dark:bg-accent-600 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Johnathen Kammer</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-2">
            AI Automation Builder
          </p>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-lg mx-auto md:mx-0">
            I create responsive AI automated chatbots with a focus on user experience
            and interface design. With secondary focus on website building for the AI chatbot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <ButtonLink href="https://creator.voiceflow.com/prototype/67412a648c3481a78004030d" variant="primary">
              See my automation
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </ButtonLink>
          </div>
          
          <div className="hidden md:flex items-center justify-center md:justify-start">
            <a 
              href="#about" 
              className="flex items-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <span className="mr-2">Scroll Down</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-secondary-700 shadow-xl">
              <img 
                src="/20250620_133803.jpg" 
                alt="Johnathen Kammer - Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent-500 rounded-full opacity-90 blur-sm"></div>
            <div className="absolute -left-2 -top-2 w-16 h-16 bg-primary-300 rounded-full opacity-80 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}