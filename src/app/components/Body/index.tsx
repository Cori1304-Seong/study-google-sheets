import { useState, useEffect } from 'react';
import EmployeesTable from '../EmployeesTable';
import SheetContext from '@/app/context/SheetContext';
import SearchBar from '../SearchBar';
import searchData from '@/app/utils/searchData';

const Body = () => {
	const [glData, setGlData] = useState<{
		fields: string[];
		data: string[][];
	}>();
	const [filteredData, setFilteredData] = useState<string[][]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('api/sheets');
			const result = await response.json();
			setGlData(result);
			setFilteredData(result?.data);
		})();
	}, []);

	if (!glData) return <p>Loading...</p>;

	return (
		<SheetContext.Provider
			value={{ fields: glData.fields, data: filteredData }}
		>
			<div className='flex flex-col gap-8'>
				<SearchBar
					onSearch={(searchTerm: string) =>
						setFilteredData(searchData({ searchTerm, glData }))
					}
				/>
				<EmployeesTable />
			</div>
		</SheetContext.Provider>
	);
};

export default Body;
