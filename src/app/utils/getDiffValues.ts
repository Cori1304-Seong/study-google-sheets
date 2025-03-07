export const getDiffValues = (
	oldValues: string[],
	newValues: string[]
): { old: string; new: string; isChanged: boolean }[] => {
	return oldValues.map((oldValue, index) => ({
		old: oldValue,
		new: newValues[index],
		isChanged: oldValue !== newValues[index],
	}));
};

export const hasDiffValues = (
	oldValues: string[],
	newValues: string[]
): boolean => {
	return oldValues.some((oldValue, index) => oldValue !== newValues[index]);
};
