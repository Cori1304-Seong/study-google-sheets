import { keysIndex } from '@/app/constants';
import { useSheetContext } from '@/app/context/SheetContext';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';
import PaginationFooter from './PaginationFooter';
import { usePaginationContext } from '@/app/context/PaginationContext';
import EmployeeTableSkeleton from './EmployeeTableSkeleton';

const EmployeesTable = (): ReactElement => {
	const router = useRouter();
	const { fields, idNameRowMap } = useSheetContext();
	const { pageContext } = usePaginationContext();
	const { pageData, totalItems } = pageContext;

	const onRowClick = (id: string, name: string) => {
		const key = `${id}-${name}`;
		router.push(`/people/${idNameRowMap[key]}-${id}`);
	};

	if (!fields.length) {
		return <EmployeeTableSkeleton />;
	}

	return (
		<table className='w-full table-auto border-2 text-left text-sm text-gray-500 shadow-md rtl:text-right'>
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
				{pageData.map((empDetails: string[], rowIndex) => (
					<tr
						className='cursor-pointer whitespace-nowrap border-b-[1px] hover:bg-pink-50'
						key={`${empDetails[keysIndex.id]}-${rowIndex}`}
						onClick={() =>
							onRowClick(empDetails[keysIndex.id], empDetails[keysIndex.name])
						}
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
			{!!totalItems && <PaginationFooter colSpan={fields.length} />}
		</table>
	);
};

export default EmployeesTable;
