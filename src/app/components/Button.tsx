import React from 'react';
import { cn } from '../libs/cn';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({
  children,
  size = 'md',
  color = 'primary',
  className,
}: ButtonProps) => {
  const sizeClass = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }[size];

  const colorClass = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }[color];

  return (
    <button className={cn('rounded', sizeClass, colorClass, className)}>
      {children}
    </button>
  );
};

export default Button;
