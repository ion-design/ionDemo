import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
	'inline-flex disabled:cursor-not-allowed active:scale-[0.99] items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-lighter shadow hover:bg-primary-light active:bg-primary-dark',
				destructive: 'bg-danger text-danger-lighter shadow-sm hover:bg-danger-light',
			},
			size: {
				default: 'h-8 px-4 py-2',
				sm: 'h-7 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-8 w-8',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, children, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp className={clsx(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
				{children}
			</Comp>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
