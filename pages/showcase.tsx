import GeneratedComponent from 'components/GeneratedComponent';

function Showcase() {
	return (
		<div className="flex flex-col h-screen w-full bg-[#434343] text-white">
			<div className="flex flex-col items-center gap-10 overflow-y-auto py-10">
				<h1 className="text-2xl font-semibold">Generated Component:</h1>
				<GeneratedComponent />
				{/* <GeneratedComponent content="Active" color="secondary" size="md" /> */}
			</div>
		</div>
	);
}

export default Showcase;
