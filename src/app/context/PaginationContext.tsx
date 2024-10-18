import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
} from 'react';
import { TOTAL_ITEMS_PER_PAGE } from '../constants';
import { useSearchDataContext } from './SearchDataContext';

type TPageContext = {
	pageData: string[][];
	currentPage: number;
	itemsPerPage: number;
	totalItems: number;
	totalPages: number;
	from: number;
	to: number;
};

type TPaginationContext = {
	pageContext: TPageContext;
	onPageChange: (page: number) => void;
};

const PaginationContext = createContext<TPaginationContext>({
	pageContext: {
		pageData: [[]],
		currentPage: 1,
		itemsPerPage: TOTAL_ITEMS_PER_PAGE,
		totalItems: 0,
		totalPages: 0,
		from: 1,
		to: TOTAL_ITEMS_PER_PAGE,
	},
	onPageChange: () => {},
});

const PaginationContextProvider = ({ children }: any): ReactElement => {
	const { filteredData: data } = useSearchDataContext();
	const contextData: TPaginationContext = usePaginationContext();

	const [pagination, setPagination] = useState<TPageContext>(
		contextData.pageContext
	);

	useEffect(() => {
		const { itemsPerPage } = pagination;
		setPagination({
			...pagination,
			pageData: data.slice(0, itemsPerPage),
			totalItems: data.length,
			totalPages: Math.ceil(data.length / itemsPerPage),
			from: 1,
			to: Math.min(1 * itemsPerPage, data.length),
		});
	}, [data]);

	const onPageChange = (page: number) => {
		const { itemsPerPage, totalItems } = pagination;
		setPagination({
			...pagination,
			currentPage: page,
			pageData: data.slice((page - 1) * itemsPerPage, page * itemsPerPage),
			from: (page - 1) * itemsPerPage + 1,
			to: Math.min(page * itemsPerPage, totalItems),
		});
	};

	return (
		<PaginationContext.Provider
			value={{ pageContext: pagination, onPageChange }}
		>
			{children}
		</PaginationContext.Provider>
	);
};

const usePaginationContext = (): TPaginationContext =>
	useContext(PaginationContext);

export { usePaginationContext, PaginationContextProvider };
