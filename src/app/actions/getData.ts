'use server';
import { getGoogleSheets } from './getGoogleSheets';

export async function getData() {
	const glSheets = await getGoogleSheets();

	const data = await glSheets?.spreadsheets?.values?.get({
		spreadsheetId: process.env.SHEET_ID,
		range: 'A1:J',
	});

	return { data: data?.data?.values };
}
