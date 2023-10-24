import { ComponentProps, useMemo } from 'react';

type ButtonProps = ComponentProps<'button'> & {
	color?: 'primary' | 'secondary' | 'tertiary' | 'outline';
	size?: 'sm' | 'md' | 'lg' | 'full';
	icon?: 'left' | 'right' | 'none';
	children: React.ReactNode;
};

function Button({
	color = 'primary',
	size = 'sm',
	icon = 'none',
	children,
	...buttonProps
}: ButtonProps) {
	const colorClasses = useMemo(() => {
		switch (color) {
			case 'primary':
				return 'bg-[#14F195] text-black ';
			case 'secondary':
				return 'bg-[#14AFF1] text-black ';
			case 'tertiary':
				return 'bg-[#141624] text-white ';
			case 'outline':
				return 'border-[#14F195] border-2 text-[#14F195] ';
			default:
				return 'bg-[#14F195] text-black ';
		}
	}, [color]);

	const sizeClasses = useMemo(() => {
		switch (size) {
			case 'sm':
				return 'px-10 w-fit ';
			case 'md':
				return 'px-16 w-fit ';
			case 'lg':
				return 'px-24 w-fit ';
			case 'full':
				return 'w-full ';
			default:
				return 'px-10 ';
		}
	}, [size]);

	const iconSource = useMemo(() => {
		switch (color) {
			case 'primary':
				return '/icon_black.svg';
			case 'secondary':
				return '/icon_black.svg';
			case 'tertiary':
				return '/icon_white.svg';
			case 'outline':
				return '/icon_green.svg';
			default:
				return '/icon_black.svg';
		}
	}, [color]);

	return (
		<button
			className={
				'flex items-center justify-center gap-2 rounded-[10px] py-2 font-semibold ' +
				colorClasses +
				sizeClasses
			}
			{...buttonProps}
		>
			{icon === 'left' && <img src={iconSource} className="h-4" alt="icon" />}
			{children}
			{icon === 'right' && <img src={iconSource} className="h-4" alt="icon" />}
		</button>
	);
}

export default Button;
