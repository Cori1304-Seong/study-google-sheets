import { uniqIndices } from '../constants';

export const hasDuplicates = (
	data: string[][],
	newRecord: string[]
): boolean => {
	return data.some((record: string[]) =>
		uniqIndices.some((i: number) => record[i] === newRecord[i])
	);
};
