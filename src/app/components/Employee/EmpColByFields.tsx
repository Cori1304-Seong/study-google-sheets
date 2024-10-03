import { empKeyToFields } from '@/app/constants/searchKeys';

const EmpColByFields = ({
	data,
	editMode,
	keyIndices,
	handleChange,
}: {
	data: string[];
	editMode: boolean;
	keyIndices: number[][];
	handleChange: Function;
}) => {
	return (
		<>
			{keyIndices.map((indices: number[], idx0: number) => (
				<div
					className='flex flex-col gap-4 p-2 font-sans font-semibold lg:p-8'
					key={idx0}
				>
					{indices.map((keyIndex: number, idx1: number) => (
						<div className='flex-colitems-center flex gap-1' key={idx1}>
							<div className='font-mono text-gray-500'>
								{empKeyToFields[keyIndex]}:{' '}
							</div>
							{!editMode && data[keyIndex]}
							{editMode && (
								<input
									type='text'
									className='rounded-sm border-2 px-2 py-1'
									placeholder={data[keyIndex]}
									onChange={(e) => handleChange(e.target.value, keyIndex)}
								/>
							)}
						</div>
					))}
				</div>
			))}
		</>
	);
};

export default EmpColByFields;
