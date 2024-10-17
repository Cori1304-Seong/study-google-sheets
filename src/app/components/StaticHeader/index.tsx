import { use, useEffect, useRef, useState } from 'react';

const StaticHeader = () => {
	const [symbols, setSymbols] = useState('');
	const headerRef = useRef<HTMLDivElement>(null);

	const getSymbols = () => {
		const asciiCodes = [
			164, 166, 167, 172, 176, 182, 191, 215, 216, 241, 248, 254,
		];
		return asciiCodes.map((code) => String.fromCharCode(code)).join(' ');
	};

	useEffect(() => {
		const headerElement = headerRef.current;
		let content = '';

		while (headerElement && headerElement.clientWidth / 10 > content.length) {
			content += ` ${getSymbols()}`;
		}
		setSymbols(content);
	}, []);

	return (
		<div
			ref={headerRef}
			className='flex h-10 w-full justify-around overflow-auto bg-gradient-to-r from-red-100 to-orange-100 p-2 font-mono'
		>
			<div className='self-center whitespace-nowrap font-mono text-xs text-gray-400'>
				{symbols}
			</div>
		</div>
	);
};

export default StaticHeader;
