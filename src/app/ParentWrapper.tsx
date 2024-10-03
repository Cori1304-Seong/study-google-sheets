'use client';
import { SheetContextProvider } from './context/SheetContext';

export default function ParentProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SheetContextProvider>{children}</SheetContextProvider>;
}
