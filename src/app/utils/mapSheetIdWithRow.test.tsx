import { mapSheetIdNameWithRow } from './mapSheetIdWithRow';

jest.mock('../constants', () => {
	return {
		keysIndex: {
			name: 0,
			id: 1,
			phoneNo: 2,
		},
	};
});

describe('mapSheetIdWithRow', () => {
	it('should map each id in the data with row num', () => {
		const data = [
			['John', 'E001', '123'],
			['Jane', 'E002', '345'],
			['John', 'E003', '678'],
			['Jogg', 'E004', '901'],
		];

		const expectedData: Record<string, number> = {
			'E001-John': 2,
			'E002-Jane': 3,
			'E003-John': 4,
			'E004-Jogg': 5,
		};

		expect(mapSheetIdNameWithRow(data)).toEqual(expectedData);
	});
});
