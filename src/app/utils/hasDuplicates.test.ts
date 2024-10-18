import { hasDuplicates } from './hasDuplicates';

jest.mock('../constants', () => {
	return { uniqIndices: [1, 2] };
});

describe('hasDuplicates', () => {
	it('should return true if there are duplicates', () => {
		const data = [
			['abc', '1'],
			['def', '2'],
			['ghi', '3'],
		];
		const newRecord = ['jkl', '3'];

		expect(hasDuplicates(data, newRecord)).toEqual(true);
	});

	it('should return false if there are no duplicates', () => {
		const data = [
			['abc', 'id-1', 't-1'],
			['def', 'id-2', 't-2'],
			['ghi', 'id-3', 't-3'],
		];
		const newRecord = ['jkl', 'id-4', 't-4'];

		expect(hasDuplicates(data, newRecord)).toEqual(false);
	});
});
