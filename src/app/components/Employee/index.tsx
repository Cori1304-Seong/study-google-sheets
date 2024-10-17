import { AlertMessage, AlertType, keysIndex } from '@/app/constants';
import { useSheetContext } from '@/app/context/SheetContext';
import { filterEmpById } from '@/app/utils/searchData';
import { useEffect, useState } from 'react';
import EmpColByFields from './EmpColByFields';
import Modal from '../Modal';
import { getDiffValues, hasDiffValues } from '@/app/utils/getDiffValues';
import { updateData } from '@/app/actions/updateData';
import EmployeeDataSkeleton from './EmployeeDataSkeleton';
import EmployeeHeader from './EmployeeHeader';
import Alert from '../Alert';

type TAlertProps = {
	show: boolean;
	message: string;
	type: keyof typeof AlertType;
};

const Employee = ({ id, row }: { id: string; row: number }) => {
	const [empData, setEmpData] = useState<string[]>();
	const [formValues, setFormValues] = useState<string[]>();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [alert, setAlert] = useState<TAlertProps>({
		show: false,
		message: '',
		type: 'INFO',
	});

	const { data: sheetData } = useSheetContext();

	useEffect(() => {
		const filteredEmpData = filterEmpById({ id, data: sheetData });
		setEmpData(filteredEmpData);
		setFormValues(filteredEmpData);
	}, [sheetData]);

	if (!empData || !formValues) {
		return (
			<div>
				<EmployeeHeader id={id} />
				<EmployeeDataSkeleton />
			</div>
		);
	}

	const validateFormValues = (): boolean => {
		setShowModal(false);
		if (!hasDiffValues(empData, formValues)) {
			showAlert('WARNING');
			return false;
		}

		return true;
	};

	const showAlert = (type: keyof typeof AlertType) => {
		setAlert({
			show: true,
			message: AlertMessage[type],
			type,
		});
		setTimeout(() => clearAlert(), 8000);
	};

	const clearAlert = () => {
		setAlert({ show: false, message: '', type: 'INFO' });
	};

	const handleUpdate = async () => {
		if (!validateFormValues()) return;

		setEditMode(false);
		setFormValues(undefined);
		const updatedValues = await updateData({
			range: `A${row}`,
			values: [formValues ?? []],
		});

		if (!updatedValues) {
			showAlert('ERROR');
			setFormValues(empData);
			return;
		}

		setEmpData(updatedValues);
		setFormValues(updatedValues);
		showAlert('SUCCESS');
	};

	const handleInputChange = (value: string, keyIndex: number) => {
		const newValues = [...(formValues || [])];
		newValues[keyIndex] = value;
		setFormValues(newValues);
	};

	return (
		<div>
			<EmployeeHeader id={id} />
			<div className='flex flex-col flex-wrap gap-4 p-10 py-5'>
				{alert.show && (
					<div className='animate-appear m-2 w-2/3 self-center overflow-auto'>
						<Alert
							severity={alert.type}
							message={alert.message}
							onClose={clearAlert}
						/>
					</div>
				)}
				<div
					className={`flex w-full flex-col flex-wrap justify-start overflow-auto rounded-md border-2 p-8 text-xs shadow-sm md:flex-row md:justify-evenly md:text-sm ${!alert.show && 'mt-10'}`}
				>
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
				<button
					onClick={() => (editMode ? setShowModal(true) : setEditMode(true))}
					className='mr-20 cursor-pointer self-end rounded-md border-2 bg-gray-500 px-8 py-1 font-mono font-semibold text-white transition duration-150 ease-in-out hover:border-gray-800 hover:bg-gray-200 hover:text-gray-800'
				>
					{editMode ? 'Update' : 'Edit'}
				</button>
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
