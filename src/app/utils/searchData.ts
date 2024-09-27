import { searchKeys } from '../constants/searchKeys';

type TSearchDataParams = {
	searchTerm: string;
	glData: {
		fields: string[];
		data: string[][];
	};
};

const searchData = ({ searchTerm, glData }: TSearchDataParams): string[][] => {
	const { fields, data } = glData;
	if (searchTerm === '') {
		return data;
	}

	let searchIndex = /\d/.test(searchTerm)
		? fields.indexOf(searchKeys.id)
		: fields.indexOf(searchKeys.name);

	return searchIndex > -1
		? data.filter((emp) =>
				emp[searchIndex].toLowerCase().includes(searchTerm.toLowerCase())
			)
		: data;
};

export default searchData;
