import { ReactElement, useState } from 'react';

type TSearchBarProps = {
	onSearch: Function;
};

const SearchBar = ({ onSearch }: TSearchBarProps): ReactElement => {
	const [searchText, setSearchText] = useState('');

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			onSearch(searchText);
		}
	};

	return (
		<div className='flex h-9 gap-4 lg:w-[50%]'>
			<input
				className='flex-grow rounded-md border-2 px-2 py-1 text-sm'
				onChange={(e) => setSearchText(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button
				className='text-ellipsis rounded-md border-2 bg-purple-200 px-3 py-1 text-sm hover:bg-purple-900 hover:text-white'
				onClick={() => onSearch(searchText)}
			>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
