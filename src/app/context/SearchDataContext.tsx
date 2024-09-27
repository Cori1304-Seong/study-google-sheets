import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from 'react';
import searchData from '../utils/searchData';
import { useSheetContext } from './SheetContext';

type TSearchDataContext = {
	filteredData: string[][];
	handleSearch: Function;
};

const SearchDataContext = createContext<TSearchDataContext>({
	filteredData: [],
	handleSearch: () => {},
});

const SearchDataContextProvider = ({ children }: any): ReactElement => {
	const sheetData = useSheetContext();
	const [filteredData, setFilteredData] = useState<string[][]>([]);

	useEffect(() => {
		setFilteredData(sheetData.data);
	}, [sheetData]);

	const handleSearch = (searchTerm: string) => {
		setFilteredData(searchData({ searchTerm, glData: sheetData }));
	};

	return (
		<SearchDataContext.Provider value={{ filteredData, handleSearch }}>
			{children}
		</SearchDataContext.Provider>
	);
};

const useSearchDataContext = (): TSearchDataContext =>
	useContext(SearchDataContext);

export { useSearchDataContext, SearchDataContextProvider };
