import Link from "next/link";

const ClientSideLinks = ({
	children,
	path,
}: {
	children: React.ReactNode;
	path: string;
}) => {
	return <Link href={path}>{children}</Link>;
};

export default ClientSideLinks;
