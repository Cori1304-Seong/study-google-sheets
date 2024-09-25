export type TPeopleData = {
	[key: string]: string;
};

export type TGlData = {
	fields: string[];
	keys: string[];
	data: TPeopleData[];
};

const createPeopleDataObj = (emp: string[], keys: string[]): TPeopleData => {
	const obj: TPeopleData = {} as TPeopleData;
	keys.forEach((key, index) => {
		obj[key] = emp[index];
	});

	return obj;
};

const convertKey = (key: string): string => {
	const iSpace = key.indexOf(' ');

	let cKey = key.toLowerCase();
	if (iSpace > -1) {
		cKey =
			cKey.slice(0, iSpace) +
			cKey[iSpace + 1].toUpperCase() +
			cKey.slice(iSpace + 2);
	}

	return cKey.replace(' ', '');
};

export const enhanceData = (glData: string[][]): TGlData => {
	const keys = glData[0].map((key) => convertKey(key));
	const empData = glData.slice(1, glData.length);

	let modifiedEmpData: TPeopleData[] = empData.map((emp) =>
		createPeopleDataObj(emp, keys)
	);

	return {
		fields: glData[0],
		keys,
		data: modifiedEmpData,
	};
};
