type Props = {
	params: {
		slug: string;
	};
};

const Post = ({ params }: Props) => {
	console.log(params.slug);
	return <div>hello</div>;
};

export default Post;
