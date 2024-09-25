import { enhanceData } from './enhanceData';

describe('enhanceData', () => {
	it('should modify the data', () => {
		const data = [
			['Name', 'Emp id', 'Phone No'],
			['John Doe', '12345', '1234567890'],
			['Jane Doe', '67890', '9876543210'],
		];
		const expectedData = {
			fields: ['Name', 'Emp id', 'Phone No'],
			keys: ['name', 'empId', 'phoneNo'],
			data: [
				{ name: 'John Doe', empId: '12345', phoneNo: '1234567890' },
				{ name: 'Jane Doe', empId: '67890', phoneNo: '9876543210' },
			],
		};

		expect(enhanceData(data)).toEqual(expectedData);
	});
});
