export const createQueryString = (queries: {
	[key: string]: string | number | boolean;
}) => {
	const params = new URLSearchParams();
	Object.entries(queries).forEach(([key, value]) => {
		params.set(key, value.toString());
	});

	return params.toString();
};
