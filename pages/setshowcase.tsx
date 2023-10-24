import GeneratedComponent from 'components/GeneratedComponent';
import { useState } from 'react';

function SetShowcase() {
	const [buttonText, setButtonText] = useState<string>('Sample Button');
	const [buttonIcon, setButtonIcon] = useState<'none' | 'left' | 'right'>('none');
	const [buttonColor, setButtonColor] = useState<'primary' | 'secondary' | 'tertiary'>('primary');

	return (
		<div className="flex flex-col h-screen w-full bg-[#3E3486] text-white text-xs">
			<div className="flex flex-col items-center gap-10 overflow-y-auto py-10">
				<h1 className="text-2xl font-semibold">Generated Component:</h1>
				<GeneratedComponent color={buttonColor} icon={buttonIcon} text={buttonText} />
				<h1 className="text-2xl font-semibold">Props:</h1>
				<div className="flex gap-20">
					<div className="flex flex-col gap-2">
						<div className="text-sm font-semibold">text:</div>
						<input
							type="text"
							value={buttonText}
							onChange={(e) => setButtonText(e.target.value)}
							className="bg-black text-slate-200 rounded-md p-2"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-sm font-semibold">icon:</div>
						<div className="flex gap-2">
							<input
								type="radio"
								name="icon"
								id="none"
								value="none"
								defaultChecked
								onChange={() => setButtonIcon('none')}
							/>
							<label htmlFor="none">None</label>
						</div>
						<div className="flex gap-2">
							<input
								type="radio"
								name="icon"
								id="left"
								value="left"
								onChange={() => setButtonIcon('left')}
							/>
							<label htmlFor="left">Left</label>
						</div>
						<div className="flex gap-2">
							<input
								type="radio"
								name="icon"
								id="right"
								value="right"
								onChange={() => setButtonIcon('right')}
							/>
							<label htmlFor="right">Right</label>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="text-sm font-semibold">color:</div>
						<div className="flex gap-2">
							<input
								type="radio"
								name="color"
								id="primary"
								value="primary"
								defaultChecked
								onChange={() => setButtonColor('primary')}
							/>
							<label htmlFor="primary">Primary</label>
						</div>
						<div className="flex gap-2">
							<input
								type="radio"
								name="color"
								id="secondary"
								value="secondary"
								onChange={() => setButtonColor('secondary')}
							/>
							<label htmlFor="secondary">Secondary</label>
						</div>
						<div className="flex gap-2">
							<input
								type="radio"
								name="color"
								id="tertiary"
								value="tertiary"
								onChange={() => setButtonColor('tertiary')}
							/>
							<label htmlFor="tertiary">Tertiary</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SetShowcase;
