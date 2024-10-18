import { MouseEventHandler, ReactElement } from 'react';

const ChevronIconButton = ({
	icon,
	onClick,
	isDisabled = false,
}: {
	icon: ReactElement;
	onClick: MouseEventHandler;
	isDisabled: boolean;
}) => {
	return (
		<div
			className={`px-4 py-1 ${isDisabled ? 'cursor-auto bg-gray-100 text-gray-300' : 'cursor-pointer hover:bg-gray-200'}`}
			onClick={isDisabled ? () => {} : onClick}
		>
			{icon}
		</div>
	);
};

export default ChevronIconButton;
