export const searchKeys = {
	name: 'Name',
	id: 'Emp id',
};

/**
 * * Indexes as per the order of fields in the spreadsheet.
 */
export const keysIndex = {
	name: 0,
	id: 1,
	fatherName: 2,
	phoneNo: 3,
	dob: 4,
	doj: 5,
	dor: 6,
	uan: 7,
	aadhar: 8,
	pan: 9,
};

export const empKeyToFields = {
	[keysIndex.name]: 'Name',
	[keysIndex.id]: 'Emp id',
	[keysIndex.fatherName]: 'Father Name',
	[keysIndex.phoneNo]: 'Phone Number',
	[keysIndex.dob]: 'Date of Birth',
	[keysIndex.doj]: 'Date of Joining',
	[keysIndex.dor]: 'Date of Retirement',
	[keysIndex.uan]: 'UAN',
	[keysIndex.aadhar]: 'Aadhar Number',
	[keysIndex.pan]: 'PAN',
};

export const AlertType = {
	ERROR: 'ERROR',
	SUCCESS: 'SUCCESS',
	INFO: 'INFO',
	WARNING: 'WARNING',
};

export const AlertMessage = {
	[AlertType.ERROR]: 'There was an error updating the fields!',
	[AlertType.SUCCESS]: 'Fields updated successfully!',
	[AlertType.WARNING]: 'No changes were detected.',
	[AlertType.INFO]: 'Please wait while the fields are being updated.',
};
