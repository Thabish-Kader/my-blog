import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/logo.svg";

const Header = () => {
	return (
		<header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 ">
			<div className="flex items-center space-x-2">
				<Link href="/">
					<Image
						src={logo}
						alt=""
						width={50}
						height={50}
						className="rounded-full"
					/>
				</Link>
				<h1>byteBattalion</h1>
			</div>

			<Link
				href="https://my-portfolio-ivory-ten.vercel.app/"
				className="px-5 py-3 text-sm bg-gray-900 md:text-base text-[#d05afc] flex items-center rounded-full text-center"
			>
				Connect with Me
			</Link>
		</header>
	);
};

export default Header;
