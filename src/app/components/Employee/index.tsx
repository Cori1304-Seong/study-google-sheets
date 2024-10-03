import { keysIndex } from '@/app/constants/searchKeys';
import { useSheetContext } from '@/app/context/SheetContext';
import { filterEmpById } from '@/app/utils/searchData';
import { useEffect, useState } from 'react';
import EmpColByFields from './EmpColByFields';
import Avatar from '@/app/icons/Avatar';

const Employee = ({ id }: { id: string }) => {
	const [empData, setEmpData] = useState<string[]>();
	const [formValues, setFormValues] = useState<string[]>();
	const [editMode, setEditMode] = useState<boolean>(false);

	const { data: sheetData } = useSheetContext();

	useEffect(() => {
		const filteredEmpData = filterEmpById({ id, data: sheetData });
		setEmpData(filteredEmpData);
		setFormValues(filteredEmpData);
	}, [sheetData]);

	const handleFormSubmit = () => {
		setEditMode(false);
	};

	const handleInputChange = (value: string, keyIndex: number) => {
		const newValues = [...(formValues || [])];
		newValues[keyIndex] = value;
		setFormValues(newValues);
	};

	if (!empData || !formValues) {
		return <div>Loading!</div>;
	}

	return (
		<div>
			<div className='flex h-40 flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-pink-300 font-serif text-3xl font-extrabold text-white drop-shadow-lg'>
				<Avatar />
				<div>#{id}</div>
			</div>
			<div className='flex flex-col flex-wrap gap-4 p-10 py-5'>
				<div className='mt-10 flex w-full flex-col flex-wrap justify-start overflow-auto rounded-md border-2 p-8 text-xs shadow-sm sm:justify-evenly md:flex-row md:text-sm'>
					<EmpColByFields
						data={empData}
						editMode={editMode}
						keyIndices={[
							[keysIndex.name, keysIndex.fatherName, keysIndex.phoneNo],
							[keysIndex.dob, keysIndex.doj, keysIndex.dor],
							[keysIndex.aadhar, keysIndex.pan, keysIndex.uan],
						]}
						handleChange={handleInputChange}
					/>
				</div>
				{!editMode && (
					<button
						onClick={() => setEditMode(true)}
						className='mr-20 cursor-pointer self-end rounded-md border-2 bg-gray-500 px-8 py-1 font-mono font-semibold text-white transition duration-150 ease-in-out hover:border-gray-800 hover:bg-gray-200 hover:text-gray-800'
					>
						Edit
					</button>
				)}
				{editMode && (
					<button
						onClick={handleFormSubmit}
						className='mr-20 cursor-pointer self-end rounded-md border-2 bg-gray-500 px-8 py-1 font-mono font-semibold text-white transition duration-150 ease-in-out hover:border-gray-800 hover:bg-gray-200 hover:text-gray-800'
					>
						Update
					</button>
				)}
			</div>
		</div>
	);
};

export default Employee;
