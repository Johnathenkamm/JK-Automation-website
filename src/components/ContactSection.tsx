import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:johnathenkamm@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Ready to automate your business? Let's discuss your project and see how AI can transform your operations."
        />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
              Let's Start a Conversation
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
              I'm always excited to work on new automation projects. Whether you need a custom chatbot, 
              voice AI solution, or workflow automation, I'm here to help transform your business processes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white">Email</div>
                  <div className="text-secondary-600 dark:text-secondary-400">johnathenkamm@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white">Phone</div>
                  <div className="text-secondary-600 dark:text-secondary-400">+1 (210) 910-9802</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white">Location</div>
                  <div className="text-secondary-600 dark:text-secondary-400">San Antonio, TX</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  Email Client Opened!
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Your default email client should have opened with the message pre-filled. Please send the email to complete your inquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white resize-none"
                    placeholder="Tell me about your automation needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}