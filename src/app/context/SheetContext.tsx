import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from 'react';
import searchData from '../utils/searchData';

type TSheetContext = {
	fields: string[];
	data: string[][];
	filteredData: string[][];
	handleSearch: Function;
};

const SheetContext = createContext<TSheetContext>({
	fields: [],
	data: [],
	filteredData: [],
	handleSearch: () => {},
});

const SheetContextProvider = ({ children }: any): ReactElement => {
	const [glData, setGlData] = useState<{
		fields: string[];
		data: string[][];
	}>({ fields: [], data: [] });
	const [filteredData, setFilteredData] = useState<string[][]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('api/sheets');
			const result = await response.json();
			setGlData(result);
			setFilteredData(result?.data);
		})();
	}, []);

	const handleSearch = (searchTerm: string) => {
		setFilteredData(searchData({ searchTerm, glData }));
	};

	return (
		<SheetContext.Provider value={{ filteredData, handleSearch, ...glData }}>
			{children}
		</SheetContext.Provider>
	);
};

const useSheetContext = (): TSheetContext => useContext(SheetContext);

export { useSheetContext, SheetContextProvider };
