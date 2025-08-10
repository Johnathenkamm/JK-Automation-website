import React from 'react';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
}

export function ButtonLink({ href, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  const baseClasses = 'inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-primary-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-white focus:ring-primary-500',
    secondary: 'bg-secondary-200 text-secondary-800 hover:bg-secondary-300 dark:bg-secondary-700 dark:text-secondary-200 dark:hover:bg-secondary-600 focus:ring-secondary-500'
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}