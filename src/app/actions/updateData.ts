'use server';
import { getGoogleSheets } from './getGoogleSheets';

export const updateData = async ({
	range,
	values,
}: {
	range: string;
	values: string[][];
}) => {
	const glSheets = await getGoogleSheets();

	try {
		const response = await glSheets?.spreadsheets?.values?.update({
			spreadsheetId: process.env.SHEET_ID,
			range,
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values,
			},
		});

		return values[0];
	} catch (err) {
		console.error(err);
		return;
	}
};
