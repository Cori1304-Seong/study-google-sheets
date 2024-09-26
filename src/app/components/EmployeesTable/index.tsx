import { ReactElement } from 'react';

type TEmployeesTableProps = {
	fields: string[];
	data: string[][];
};

const EmployeesTable = ({
	fields,
	data,
}: TEmployeesTableProps): ReactElement => {
	return (
		<table className='w-full table-auto border-2 text-left text-sm text-gray-500 rtl:text-right'>
			<thead className='border-b-4 bg-blue-50 text-xs uppercase text-gray-700'>
				<tr>
					{fields.map((field, index) => (
						<th className='border-r-[2px] p-3' key={index}>
							{field}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((empDetails: string[]) => (
					<tr
						className='cursor-pointer border-b-[1px] hover:bg-pink-50'
						key={empDetails[1]}
					>
						<>
							{empDetails.map((value: string, index: number) => (
								<td className='border-r-[1px] p-3' key={index}>
									{value}
								</td>
							))}
						</>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default EmployeesTable;
