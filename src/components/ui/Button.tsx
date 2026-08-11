'use client';

import React, { forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'chip' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string; // FontAwesome icon class, e.g. "fa-solid fa-check"
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      isLoading = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Generate class names based on variant & size
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const sizeClass = `btn-${size}`;
    const combinedClassName = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <i className="fa-solid fa-circle-notch fa-spin btn-icon-left" />
        ) : icon && iconPosition === 'left' ? (
          <i className={`${icon} btn-icon-left`} />
        ) : null}

        {children && <span>{children}</span>}

        {!isLoading && icon && iconPosition === 'right' ? (
          <i className={`${icon} btn-icon-right`} />
        ) : null}
      </button>
    );
  }
);

Button.displayName = 'Button';
