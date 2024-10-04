import { getDiffValues } from './getDiffValues';

describe('getDiffValues', () => {
	it('should return array with old, new values and isChanged attribute', () => {
		const data = {
			oldValues: ['hey', 'there', 'this', 'is', 'just', 'test'],
			newValues: ['hello', 'there', 'this', 'is', 'test', 'file'],
		};
		const expectedData = [
			{ old: 'hey', new: 'hello', isChanged: true },
			{ old: 'there', new: 'there', isChanged: false },
			{ old: 'this', new: 'this', isChanged: false },
			{ old: 'is', new: 'is', isChanged: false },
			{ old: 'just', new: 'test', isChanged: true },
			{ old: 'test', new: 'file', isChanged: true },
		];

		expect(getDiffValues(data.oldValues, data.newValues)).toEqual(expectedData);
	});
});
