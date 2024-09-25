import { useState, useEffect } from 'react';

const Body = () => {
	const [glData, setGlData] = useState();

	useEffect(() => {
		(async () => {
			const response = await fetch('api/sheets');
			const data = await response.json();
			setGlData(data);
		})();
	}, []);

	if (!glData) return <p>Loading...</p>;

	return <div>Hello!!</div>;
};

export default Body;
