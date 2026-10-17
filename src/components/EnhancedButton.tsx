import React, { ReactNode } from 'react';

interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  fullWidth?: boolean;
  children?: ReactNode;
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  fullWidth = false,
  children,
  disabled,
  className,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-lg
    transition-all duration-100 relative overflow-hidden
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95 active:shadow-sm
    hover:shadow-md hover:-translate-y-0.5
  `;

  const variants = {
    primary: `
      bg-gradient-to-br from-amber-700 to-amber-900 text-white
      shadow-sm
      focus-visible:ring-amber-500 dark:focus-visible:ring-amber-400
      dark:from-amber-500 dark:to-amber-600 dark:text-stone-900
      hover:from-amber-800 hover:to-amber-950
    `,
    secondary: `
      bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-white
      border border-stone-300 dark:border-stone-700
      hover:bg-stone-300 dark:hover:bg-stone-700
      focus-visible:ring-stone-400
    `,
    ghost: `
      bg-transparent text-amber-700 dark:text-amber-400
      border border-amber-700 dark:border-amber-400
      hover:bg-amber-50 dark:hover:bg-amber-950
      focus-visible:ring-amber-500
    `,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon
      )}
      {children}
    </button>
  );
};
