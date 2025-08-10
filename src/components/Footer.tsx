import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-secondary-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="font-bold text-2xl text-white">
                JK<span className="text-primary-400">.</span>
              </div>
            </div>
            <p className="text-secondary-400 mb-6 max-w-md">
              Transforming businesses through intelligent AI automation solutions. 
              Specializing in chatbots, voice AI, and workflow automation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/johnathen-kammer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a
                href="mailto:johnathenkamm@gmail.com"
                className="p-2 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#tools" className="hover:text-primary-400 transition-colors">Tools</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">AI Chatbots</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Voice AI</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Workflow Automation</a></li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 mt-12 pt-8 text-center">
          <p className="flex items-center justify-center">
            Made by Johnathen Kammer
          </p>
          <p className="mt-2 text-secondary-400 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}