import type { Metadata } from 'next';
import './globals.css';
import ParentProvider from './ParentWrapper';

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
				<ParentProvider>{children}</ParentProvider>
			</body>
		</html>
	);
}
