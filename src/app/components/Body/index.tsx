import EmployeesTable from '../EmployeesTable';
import { useSheetContext } from '@/app/context/SheetContext';
import SearchBar from '../SearchBar';

const Body = () => {
	const { handleSearch } = useSheetContext();

	return (
		<div className='flex flex-col gap-8'>
			<SearchBar onSearch={handleSearch} />
			<EmployeesTable />
		</div>
	);
};

export default Body;
