import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { urlFor } from "../lib/urlFor";
import ClientSideLinks from "./clientSideLinks";

type Props = {
	posts: Post[];
};

const Blogs = ({ posts }: Props) => {
	return (
		<div>
			<hr className="border-brand mb-10" />
			<div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
				{/* posts */}
				{posts.map((post) => (
					<ClientSideLinks
						key={post._id}
						path={`/post/${post.slug.current}`}
					>
						<div className="group flex flex-col cursor-pointer">
							<div className="relative w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-out shadow-lg">
								<Image
									src={urlFor(post.mainImage).url()}
									alt={post.author.name}
									fill
									className="object-cover object-ledt lg:object-center"
								/>
								<div
									className="absolute bottom-0 w-full bg-opacity-20 bg-black
                                backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between"
								>
									<div>
										<p className="font-bold">
											{post.title}
										</p>
										<p>
											{new Date(
												post._createdAt
											).toLocaleDateString("en-US", {
												day: "numeric",
												month: "long",
												year: "numeric",
											})}
										</p>
									</div>

									<div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center ">
										{post.categories.map((category) => (
											<div
												key={category._id}
												className="bg-purple-600 text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
											>
												<p>{category.title}</p>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="mt-5 flex-1 ">
								<p className="underline text-lg font-bold">
									{post.title}
								</p>
								<p className="text-gray-500 ">
									{post.description}
								</p>
							</div>

							<p className="mt-5 font-bold flex items-center group-hover:underline">
								Read Post
								<BsBoxArrowUpRight className="ml-2 " />
							</p>
						</div>
					</ClientSideLinks>
				))}
			</div>
		</div>
	);
};

export default Blogs;
