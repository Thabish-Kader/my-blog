"use client";
import { usePreview } from "../lib/sanity.preview";
import Blogs from "./Blogs";
type Props = {
	query: string;
};

export const PreviewBlogList = ({ query }: Props) => {
	const posts = usePreview(process.env.NEXT_PUBLIC_SANITY_TOKEN!, query);
	// console.log(`Loading posts...${posts}`);
	return <Blogs posts={posts} />;
};
