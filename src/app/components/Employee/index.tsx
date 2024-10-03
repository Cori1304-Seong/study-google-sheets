import { useSheetContext } from '@/app/context/SheetContext';
import { filterEmpById } from '@/app/utils/searchData';
import { useEffect, useState } from 'react';

const Employee = ({ id }: { id: string }) => {
	const [empData, setEmpData] = useState<string[]>();
	const { data: sheetData } = useSheetContext();

	useEffect(() => {
		setEmpData(filterEmpById({ id, data: sheetData }));
	}, [sheetData]);

	if (!empData) {
		return <div>Loading!</div>;
	}

	return (
		<div>
			<div className='flex h-40 w-[100%] items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-300 font-serif text-3xl font-extrabold text-white drop-shadow-lg'>
				Hello #{id}
			</div>
		</div>
	);
};

export default Employee;
