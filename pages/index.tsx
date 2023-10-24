function Page() {
	return (
		<div className="flex h-screen w-screen flex-col items-center gap-10 bg-[#3E3486] text-white py-10">
			<h1 className="text-2xl font-bold">Ion</h1>
			<div className="flex flex-col gap-6">
				<div>Welcome to the ion Demo!</div>
				<div>
					In this repo, you will find a few example components under:{' '}
					<pre className="code">/components/</pre>
				</div>
				<div>
					You can test out some generations at: <pre className="code">/pages/showcase.tsx</pre>
				</div>
				<div>I wish you the best of luck!</div>
			</div>
		</div>
	);
}

export default Page;
