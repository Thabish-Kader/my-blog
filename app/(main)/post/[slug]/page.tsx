import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import CustomText from "../../../../components/CustomText";
import { client } from "../../../../lib/sanity.client";
import { urlFor } from "../../../../lib/urlFor";
import post from "../../../../schemas/post";

type Props = {
	params: {
		slug: string;
	};
};
export const revalidate = 60;
export async function generateStaticParams() {
	const query = groq`
	*[_type == 'post' ]{
		slug,
	}
	`;
	const posts: Post[] = await client.fetch(query);

	return posts.map((post) => ({
		slug: post.slug.current,
	}));
}

const Post = async ({ params }: Props) => {
	const query = groq`
	*[_type == 'post' && slug.current == $slug][0]{
	  ...,
	  categories[]->,
	  author->,
	}  
	`;
	const post: Post = await client.fetch(query, params);
	return (
		<article>
			{/* banner */}
			<section>
				<div className="relative h-96 w-full shadow-sm">
					<div className="absolute inset-0 p-10  bg-purple-400 w-full">
						{/* 1st row */}
						<div className="flex justify-between items-center">
							<div className="flex flex-col mt-10 text-white">
								<h1 className="text-4xl font-extrabold">
									{post.title}
								</h1>
								<p className="text-xl font-extrabold">
									{new Date(post._createdAt).toLocaleString(
										"en-US",
										{
											month: "long",
											year: "numeric",
											day: "numeric",
										}
									)}
								</p>
							</div>
							{/* author info */}
							<div className="flex items-center">
								<Image
									src={urlFor(post.author.image).url()}
									alt={post.author.name}
									height={50}
									width={50}
									className="rouned-full object-contain"
								/>
								<p className="font-extrabold">
									{post.author.name}
								</p>
							</div>
						</div>

						<div className="mt-10 flex flex-col">
							<p className="text-white font-extrabold flex-1">
								{post.description}
							</p>
							<div className="flex justify-end space-x-2">
								{post.categories.map((category) => (
									<div className=" mt-10" key={category._id}>
										<p className="bg-black px-2 rounded-full text-white text-center">
											{category.title}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<Image
						src={urlFor(post.mainImage).url()}
						alt={post.title}
						fill
						className="object-cover opacity-20 bg-blur"
					/>
				</div>
			</section>

			<section className="p-10">
				<PortableText value={post.body} components={CustomText} />
			</section>
		</article>
	);
};

export default Post;
