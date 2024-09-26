import { useState, useEffect } from 'react';
import EmployeesTable from '../EmployeesTable';

const Body = () => {
	const [glData, setGlData] = useState<{
		fields: string[];
		data: string[][];
	}>();

	useEffect(() => {
		(async () => {
			const response = await fetch('api/sheets');
			const data = await response.json();
			setGlData(data);
		})();
	}, []);

	if (!glData) return <p>Loading...</p>;

	return <EmployeesTable fields={glData.fields} data={glData.data} />;
};

export default Body;
