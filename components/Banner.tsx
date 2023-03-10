export const Banner = () => {
	return (
		<div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
			<div>
				<h1 className="text-7xl">bytes Daily Blog</h1>
				<h2 className="mt-5 md:mt-0">
					This is where I showcase my Journey
				</h2>
			</div>
			<p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
				Tech News | Developer News | Projects Experiences
			</p>
		</div>
	);
};
