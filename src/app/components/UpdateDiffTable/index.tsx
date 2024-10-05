import { empKeyToFields } from '@/app/constants';

type UpdateDiffTableProps = {
	values: {
		old: string;
		new: string;
		isChanged: boolean;
	}[];
};

const UpdateDiffTable = ({ values }: UpdateDiffTableProps) => {
	return (
		<table className='w-full table-auto border-2 text-left text-sm text-gray-500 rtl:text-right'>
			<thead className='border-b-[1px] bg-gray-50 text-xs text-gray-600'>
				<tr className='divide-x-2 border-b-2'>
					<th className='px-2 py-1'></th>
					<th className='px-2 py-1'>Old Values</th>
					<th className='px-2 py-1'>New Values</th>
				</tr>
			</thead>
			<tbody>
				{values.map((value, index) => (
					<tr
						className='cursor-pointer divide-x-2 border-b-[1px] hover:bg-gray-50'
						key={index}
					>
						<th className='px-2 py-1'>{empKeyToFields[index]}</th>
						<td className={`px-2 py-1 ${value.isChanged && 'bg-red-50'}`}>
							{value.old}
						</td>
						<td className={`px-2 py-1 ${value.isChanged && 'bg-green-50'}`}>
							{value.new}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UpdateDiffTable;
