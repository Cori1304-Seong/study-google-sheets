import ChevronDoubleLeftIcon from '@/app/icons/ChevronDoubleLeftIcon';
import ChevronIconButton from './ChevronIconButton';
import ChevronLeftIcon from '@/app/icons/ChevronLeftIcon';
import ChevronRightIcon from '@/app/icons/ChevronRightIcon';
import ChevronDoubleRightIcon from '@/app/icons/ChevronDoubleRightIcon';
import { usePaginationContext } from '@/app/context/PaginationContext';

const PaginationFooter = ({ colSpan }: { colSpan?: number }) => {
	const { pageContext, onPageChange } = usePaginationContext();
	const { currentPage, from, to, totalItems, totalPages } = pageContext;

	return (
		<tfoot className='whitespace-nowrap border-t-2'>
			<tr
				className='border-t-2 border-gray-300 bg-gray-50'
				key={'paginated-row'}
			>
				<td colSpan={colSpan} className='p-2 px-2'>
					<div className='flex items-center justify-between'>
						<div className='text-sm text-gray-700'>
							Showing <span className='font-medium'>{from}</span> to{' '}
							<span className='font-medium'>{to}</span> of{' '}
							<span className='font-medium'>{totalItems}</span> results
						</div>
						<div className='flex rounded-sm border-2'>
							<ChevronIconButton
								onClick={() => onPageChange(1)}
								isDisabled={currentPage === 1}
								icon={<ChevronDoubleLeftIcon />}
							/>
							<ChevronIconButton
								onClick={() => onPageChange(currentPage - 1)}
								isDisabled={currentPage === 1}
								icon={<ChevronLeftIcon />}
							/>
							<ChevronIconButton
								onClick={() => onPageChange(currentPage + 1)}
								isDisabled={currentPage === totalPages}
								icon={<ChevronRightIcon />}
							/>
							<ChevronIconButton
								onClick={() => onPageChange(totalPages)}
								isDisabled={currentPage === totalPages}
								icon={<ChevronDoubleRightIcon />}
							/>
						</div>
					</div>
				</td>
			</tr>
		</tfoot>
	);
};

export default PaginationFooter;
