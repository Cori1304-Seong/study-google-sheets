const EmployeeDataSkeleton = () => {
	return (
		<div className='m-10 flex min-h-56 flex-col flex-wrap items-center justify-around gap-2 rounded-md border-2 bg-gray-100 p-2 lg:p-8'>
			{Array.from({ length: 3 }).map(() => (
				<div className='flex w-full flex-row flex-wrap justify-around gap-2'>
					{Array.from({ length: 3 }).map(() => (
						<div className='flex h-6 w-36 animate-pulse rounded-md bg-gray-300 md:w-56'></div>
					))}
				</div>
			))}
		</div>
	);
};

export default EmployeeDataSkeleton;
