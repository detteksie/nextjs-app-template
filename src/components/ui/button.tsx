import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '|/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 ' +
    // light
    'focus-visible:ring-slate-950 ' +
    // dark
    'dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'shadow ' +
          // light
          'bg-slate-900 text-slate-50 hover:bg-slate-900/90 ' +
          // dark
          'dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90',
        destructive:
          'shadow-sm ' +
          // light
          'bg-red-500 text-slate-50 hover:bg-red-500/90 ' +
          // dark
          'dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
        outline:
          'border shadow-sm ' +
          // light
          'border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 ' +
          // dark
          'dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        secondary:
          'shadow-sm ' +
          // light
          'bg-slate-100 text-slate-900 hover:bg-slate-100/80 ' +
          // dark
          'dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
        ghost:
          // light
          'hover:bg-slate-100 hover:text-slate-900 ' +
          // dark
          'dark:hover:bg-slate-800 dark:hover:text-slate-50',
        link:
          'underline-offset-4 hover:underline ' +
          // light
          'text-slate-900 ' +
          // dark
          'dark:text-slate-50',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
