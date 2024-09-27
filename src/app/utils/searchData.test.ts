import searchData from './searchData';

describe('Search functionality', () => {
	const glData = {
		fields: ['Name', 'Emp id', 'Phone No'],
		data: [
			['John Doe', '12345', '1234567890'],
			['Jane Doe', '67890', '9876543210'],
			['Tom Wood', '90890', '8368520010'],
		],
	};

	it('should search employees by name', () => {
		const params = {
			searchTerm: 'doe',
			glData,
		};
		const expectedData = [
			['John Doe', '12345', '1234567890'],
			['Jane Doe', '67890', '9876543210'],
		];

		expect(searchData(params)).toEqual(expectedData);
	});

	it('should search employees by id', () => {
		const params = {
			searchTerm: '890',
			glData,
		};
		const expectedData = [
			['Jane Doe', '67890', '9876543210'],
			['Tom Wood', '90890', '8368520010'],
		];

		expect(searchData(params)).toEqual(expectedData);
	});

	it('should return original data if search text is empty', () => {
		const params = {
			searchTerm: '',
			glData,
		};

		expect(searchData(params)).toEqual(glData.data);
	});

	it('should return original data if search index is not valid', () => {
		const params = {
			searchTerm: 'Doe',
			glData: {
				fields: ['Naam', 'Id', 'Phone No'],
				data: glData.data,
			},
		};

		expect(searchData(params)).toEqual(glData.data);
	});

	it('should return empty array if search term is not valid', () => {
		const params = {
			searchTerm: 'somesearchterm',
			glData,
		};

		expect(searchData(params)).toEqual([]);
	});
});
