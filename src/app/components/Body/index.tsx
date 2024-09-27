import EmployeesTable from '../EmployeesTable';
import SearchBar from '../SearchBar';
import { SearchDataContextProvider } from '@/app/context/SearchDataContext';

const Body = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SearchDataContextProvider>
				<SearchBar />
				<EmployeesTable />
			</SearchDataContextProvider>
		</div>
	);
};

export default Body;
