'use server';
import { getGoogleSheets } from './getGoogleSheets';

export async function getData() {
	const glSheets = await getGoogleSheets();

	const data = await glSheets?.spreadsheets?.values?.get({
		spreadsheetId: process.env.SHEET_ID,
		range: 'A1:C6',
	});

	console.log(data.data.values);
	return { data: data?.data?.values };
}
