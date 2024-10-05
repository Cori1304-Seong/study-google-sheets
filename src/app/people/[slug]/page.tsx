'use client';
import Employee from '@/app/components/Employee';

const PeoplePage = ({ params }: { params: { slug: string } }) => {
	const [row, id] = params.slug.split('-');

	return <Employee id={id} row={Number(row)} />;
};

export default PeoplePage;
