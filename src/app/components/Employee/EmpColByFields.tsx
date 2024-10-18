import { empKeyToFields, keysIndex } from '@/app/constants';

const EmpColByFields = ({
	data,
	editMode,
	keyIndices,
	handleChange,
	isCreate = false,
}: {
	data: string[];
	editMode: boolean;
	keyIndices: number[][];
	handleChange: Function;
	isCreate?: boolean;
}) => {
	return (
		<div className='flex flex-col flex-wrap justify-between gap-2 font-sans font-semibold lg:items-center'>
			{isCreate && (
				<div className='flex flex-wrap items-center gap-2 rounded-md bg-stone-50 p-3 lg:px-20'>
					<div
						className={`whitespace-nowrap font-mono text-gray-500 ${!editMode && 'border-b-2'}`}
					>
						{empKeyToFields[keysIndex.id]}:{' '}
					</div>
					<input
						type='text'
						className='flex-1 rounded-sm border bg-inherit px-2 py-1'
						placeholder={data[keysIndex.id]}
						onChange={(e) => handleChange(e.target.value, keysIndex.id)}
					/>
				</div>
			)}
			<div className='flex flex-wrap'>
				{keyIndices.map((indices: number[], idx0: number) => (
					<div className='flex flex-col gap-4 p-2 lg:p-8' key={idx0}>
						{indices.map((keyIndex: number, idx1: number) => (
							<div
								className='flex flex-row flex-wrap items-center gap-2'
								key={idx1}
							>
								<div
									className={`whitespace-nowrap font-mono text-gray-500 ${!editMode && 'border-b-2'}`}
								>
									{empKeyToFields[keyIndex]}:{' '}
								</div>
								{!editMode && (
									<div className='whitespace-nowrap'>{data[keyIndex]}</div>
								)}
								{editMode && (
									<input
										type='text'
										className='flex-1 rounded-sm border px-2 py-1'
										placeholder={data[keyIndex]}
										onChange={(e) => handleChange(e.target.value, keyIndex)}
									/>
								)}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default EmpColByFields;
