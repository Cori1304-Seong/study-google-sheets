import { keysIndex } from '../constants';

export const mapSheetIdNameWithRow = (
	data: string[][]
): Record<string, number> => {
	const sheetIdNameRowMap: Record<string, number> = {};
	data.forEach((row, index) => {
		if (row[keysIndex.id] && row[keysIndex.name]) {
			sheetIdNameRowMap[`${row[keysIndex.id]}-${row[keysIndex.name]}`] =
				index + 2;
		}
	});
	return sheetIdNameRowMap;
};
