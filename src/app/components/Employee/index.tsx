import { keysIndex } from '@/app/constants';
import { useSheetContext } from '@/app/context/SheetContext';
import { filterEmpById } from '@/app/utils/searchData';
import { useEffect, useState } from 'react';
import EmpColByFields from './EmpColByFields';
import Avatar from '@/app/icons/Avatar';
import Modal from '../Modal';
import { getDiffValues } from '@/app/utils/getDiffValues';
import { updateData } from '@/app/actions/updateData';

const Employee = ({ id, row }: { id: string; row: number }) => {
	const [empData, setEmpData] = useState<string[]>();
	const [formValues, setFormValues] = useState<string[]>();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);

	const { data: sheetData } = useSheetContext();

	useEffect(() => {
		const filteredEmpData = filterEmpById({ id, data: sheetData });
		setEmpData(filteredEmpData);
		setFormValues(filteredEmpData);
	}, [sheetData]);

	const handleUpdate = async () => {
		setShowModal(false);
		setEditMode(false);
		const updatedValues = await updateData({
			range: `A${row}`,
			values: [formValues ?? []],
		});
		setEmpData(updatedValues);
		setFormValues(updatedValues);
		/**
		 * TODO: show loader
		 * TODO: show snack bar - updated successfully
		 */
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
				<div className='mt-10 flex w-full flex-col flex-wrap justify-start overflow-auto rounded-md border-2 p-8 text-xs shadow-sm md:flex-row md:justify-evenly md:text-sm'>
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
						onClick={() => setShowModal(true)}
						className='mr-20 cursor-pointer self-end rounded-md border-2 bg-gray-500 px-8 py-1 font-mono font-semibold text-white transition duration-150 ease-in-out hover:border-gray-800 hover:bg-gray-200 hover:text-gray-800'
					>
						Update
					</button>
				)}
				{showModal && (
					<Modal
						values={getDiffValues(empData, formValues)}
						handleClose={() => setShowModal(false)}
						handleSave={handleUpdate}
					/>
				)}
			</div>
		</div>
	);
};

export default Employee;
