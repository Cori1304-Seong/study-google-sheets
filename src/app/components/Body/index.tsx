import EmployeesTable from '../EmployeesTable';
import SearchBar from '../SearchBar';
import { SearchDataContextProvider } from '@/app/context/SearchDataContext';
import CreateButton from './CreateButton';

const Body = () => {
	return (
		<div className='flex flex-col gap-8'>
			<SearchDataContextProvider>
				<div className='flex items-center gap-3 font-mono md:justify-between'>
					<SearchBar />
					<CreateButton />
				</div>
				<EmployeesTable />
			</SearchDataContextProvider>
		</div>
	);
};

export default Body;
