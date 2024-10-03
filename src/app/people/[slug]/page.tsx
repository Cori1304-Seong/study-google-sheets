'use client';
import Employee from '@/app/components/Employee';

const PeoplePage = ({ params }: { params: { slug: string } }) => {
	return <Employee id={params.slug} />;
};

export default PeoplePage;
