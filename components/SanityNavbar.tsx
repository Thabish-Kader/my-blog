import Link from "next/link";
import { NavbarProps } from "sanity";
import { BsArrow90DegLeft } from "react-icons/bs";

const SanityNavbar = (props: NavbarProps) => {
	return (
		<div>
			<div className="flex items-center justify-between p-5">
				<Link href="/" className="text-[#d05afc] flex items-center ">
					Go To website
					<BsArrow90DegLeft className="ml-2" />
				</Link>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
};

export default SanityNavbar;
