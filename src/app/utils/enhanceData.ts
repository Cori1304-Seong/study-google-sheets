const peopleDataKeys = [
	'name',
	'empId',
	'fatherName',
	'phoneNumber',
	'DOB',
	'DOJ',
	'DOR',
	'UAN',
	'aadhar',
	'PAN',
];

export type TPeopleData = {
	[key: string]: string;
	name: string;
	empId: string;
	fatherName: string;
	phoneNumber: string;
	DOB: string;
	DOJ: string;
	DOR: string;
	UAN: string;
	aadhar: string;
	PAN: string;
};

const createPeopleDataObj = (emp: string[]): TPeopleData => {
	const obj: TPeopleData = {} as TPeopleData;
	peopleDataKeys.forEach((key, index) => {
		obj[key] = emp[index];
	});

	return obj;
};

export const enhanceData = (
	glData: string[][]
): { keys: string[]; data: TPeopleData[] } => {
	const keys = glData[0];
	const empData = glData.slice(1, glData.length);

	let modifiedEmpData: TPeopleData[] = empData.map((key) =>
		createPeopleDataObj(key)
	);

	return {
		keys,
		data: modifiedEmpData,
	};
};
