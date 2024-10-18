import Link from 'next/link';

const CreateButton = () => {
	return (
		<Link
			href={`/people/create`}
			className='mr-2 whitespace-nowrap rounded-md border bg-lime-100 px-2 py-1 text-sm text-gray-900 hover:bg-lime-200'
		>
			Create Record
		</Link>
	);
};

export default CreateButton;
