import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import { PreviewBlogList } from "../../components/PreviewBlogList";
import Blogs from "../../components/Blogs";

export const revalidate = 60;

const query = groq`
*[_type == 'post']{
  ...,
  categories[]->,
  author->,
}  | order(_createdAt desc)
`;

const Home = async () => {
	if (previewData()) {
		return (
			<PreviewSuspense fallback="Loading...">
				<PreviewBlogList query={query} />
			</PreviewSuspense>
		);
	}

	const posts = await client.fetch(query);
	return <Blogs posts={posts} />;
};

export default Home;
