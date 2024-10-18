import { createQueryString } from './createQueryString';

describe('createQueryString', () => {
	it('should create query string', () => {
		const data = {
			refresh: true,
			sort: 'asc',
			test: 1,
		};
		const expectedData = 'refresh=true&sort=asc&test=1';

		expect(createQueryString(data)).toEqual(expectedData);
	});

	it('should create empty query string for empty object passed', () => {
		expect(createQueryString({})).toEqual('');
	});
});
