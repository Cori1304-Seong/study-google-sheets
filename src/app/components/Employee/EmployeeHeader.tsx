import Avatar from '@/app/icons/Avatar';
import HomeIcon from '@/app/icons/HomeIcon';
import Link from 'next/link';

const EmployeeHeader = ({ id }: { id: string }) => {
	return (
		<div className='flex h-40 w-full flex-row items-center justify-between overflow-auto bg-gradient-to-r from-indigo-500 to-pink-300 font-serif text-white drop-shadow-lg'>
			<Link href={'/'} className='ml-10'>
				<HomeIcon />
			</Link>
			<div className='flex flex-wrap items-center justify-center gap-3 text-3xl font-extrabold'>
				<Avatar />
				<div>#{id}</div>
			</div>
			<div></div>
		</div>
	);
};

export default EmployeeHeader;
