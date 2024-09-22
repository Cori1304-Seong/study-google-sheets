import { getPosts } from '../actions/posts';

type TPost = {
	id: number;
	title: string;
	content: string;
	author: string;
	date: string;
	category: string;
};

const Dashboard = async () => {
	const postsRes: TPost[] = await getPosts();

	return (
		<ul>
			{postsRes.map((post: TPost) => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	);
};

export default Dashboard;
