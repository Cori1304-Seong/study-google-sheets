import { useSearchParams } from 'next/navigation';
import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from 'react';
import { mapSheetIdNameWithRow } from '../utils/mapSheetIdWithRow';

type TSheetContext = {
	fields: string[];
	data: string[][];
	idNameRowMap: Record<string, number>;
};

const SheetContext = createContext<TSheetContext>({
	fields: [],
	data: [],
	idNameRowMap: {},
});

const SheetContextProvider = ({ children }: any): ReactElement => {
	const searchParams = useSearchParams();
	const [glData, setGlData] = useState<TSheetContext>({
		fields: [],
		data: [],
		idNameRowMap: {},
	});

	useEffect(() => {
		if (glData.data.length && !searchParams.get('refresh')) return;

		(async () => {
			const response = await fetch(
				process.env.NEXT_PUBLIC_BASE_URL + 'api/sheets'
			);
			const result: { fields: []; data: [] } = await response.json();
			setGlData({
				...result,
				idNameRowMap: mapSheetIdNameWithRow(result.data),
			});
		})();
	}, [searchParams.get('refresh')]);

	return (
		<SheetContext.Provider value={glData}>{children}</SheetContext.Provider>
	);
};

const useSheetContext = (): TSheetContext => useContext(SheetContext);

export { useSheetContext, SheetContextProvider };
