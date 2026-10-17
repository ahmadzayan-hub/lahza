import React, { ReactNode } from 'react';

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  interactive?: boolean;
  hover?: boolean;
  children?: ReactNode;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  elevated = false,
  interactive = false,
  hover = true,
  className,
  children,
  ...props
}) => (
  <div
    className={`
      rounded-lg p-6 border transition-all duration-200
      ${
        elevated
          ? 'bg-gradient-to-br from-amber-50 to-stone-50 dark:from-stone-900 dark:to-stone-800 shadow-lg'
          : 'bg-stone-50 dark:bg-stone-900 shadow-sm'
      }
      border-stone-200 dark:border-stone-800
      ${hover ? 'hover:shadow-md hover:-translate-y-0.5' : ''}
      ${interactive ? 'cursor-pointer' : ''}
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);
