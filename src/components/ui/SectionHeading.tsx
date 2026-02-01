import React from 'react';
import { cn } from './utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("text-3xl font-bold mb-4 inline-block", className)}>
      {children}
    </h2>
  );
}
