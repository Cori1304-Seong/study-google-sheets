import { useState, useEffect } from 'react';
import EmployeesTable from '../EmployeesTable';
import SheetContext from '@/app/context/SheetContext';

const Body = () => {
	const [glData, setGlData] = useState<{
		fields: string[];
		data: string[][];
	}>();

	useEffect(() => {
		(async () => {
			const response = await fetch('api/sheets');
			const data = await response.json();
			setGlData(data);
		})();
	}, []);

	if (!glData) return <p>Loading...</p>;

	return (
		<SheetContext.Provider value={glData}>
			<div className='flex flex-col gap-8'>
				<div className='flex h-9 gap-4 lg:w-[50%]'>
					<input className='flex-grow rounded-md border-2 px-2 py-1 text-sm' />
					<button className='text-ellipsis rounded-md border-2 bg-purple-200 px-3 py-1 text-sm hover:bg-purple-900 hover:text-white'>
						Search
					</button>
				</div>
				<EmployeesTable />
			</div>
		</SheetContext.Provider>
	);
};

export default Body;
