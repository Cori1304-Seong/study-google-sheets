import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'GS App',
	description: 'NextJS App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={'antialiased'}>
				<div className='container'>{children}</div>
			</body>
		</html>
	);
}
