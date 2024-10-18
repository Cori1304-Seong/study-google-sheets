const EmployeeTableSkeleton = () => {
	return (
		<div className='animate-pulse overflow-auto rounded-md border-2 border-gray-200 bg-gray-200'>
			<table>
				<tbody>
					{Array.from({ length: 10 }).map((_, index) => (
						<tr key={index}>
							{Array.from({ length: 10 }).map((_, index) => (
								<td className='w-32 border-b-[1px] border-r-[1px] border-gray-300 p-5'></td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EmployeeTableSkeleton;
