import { createContext } from 'react';

type TSheetContext = {
	fields: string[];
	data: string[][];
};

const SheetContext = createContext<TSheetContext>({
	fields: [],
	data: [],
});

export default SheetContext;
