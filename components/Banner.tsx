export const Banner = () => {
	return (
		<div className="flex justify-between items-center px-10 py-5">
			{/* left side */}
			<div className="flex flex-col space-y-2">
				<h1 className="text-7xl font-bold">
					<span className="text-brand">byte's</span> Blog
				</h1>
				<p className="font-bold text-xl">
					Welcome to my blog. This is where I share my experienes
				</p>
			</div>

			{/* right side */}
			<div>
				<p className="text-gray-500 font-bold max-w-sm">
					Latest Tech| New Features | Weekly Youtube Vidoes |
					Developer News and More
				</p>
			</div>
		</div>
	);
};
