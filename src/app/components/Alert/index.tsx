import { AlertType } from '@/app/constants';
import CheckCircleIcon from '@/app/icons/CheckCircleIcon';
import ErrorIcon from '@/app/icons/ErrorIcon';
import InfoIcon from '@/app/icons/InfoIcon';
import WarningIcon from '@/app/icons/WarningIcon';
import { MouseEventHandler } from 'react';

const alert = {
	[AlertType.ERROR]: {
		icon: <ErrorIcon />,
		colorClasses: 'bg-rose-50 text-rose-800 border-rose-300',
	},
	[AlertType.SUCCESS]: {
		icon: <CheckCircleIcon />,
		colorClasses: 'bg-teal-50 text-teal-700 border-teal-600',
	},
	[AlertType.INFO]: {
		icon: <InfoIcon />,
		colorClasses: 'bg-sky-50 text-sky-700 border-sky-400',
	},
	[AlertType.WARNING]: {
		icon: <WarningIcon />,
		colorClasses: 'bg-amber-50 text-amber-700 border-amber-400',
	},
};

type AlertProps = {
	severity?: keyof typeof AlertType;
	message: string;
	onClose: MouseEventHandler;
};

const Alert = ({ severity = 'INFO', message, onClose }: AlertProps) => {
	const { colorClasses, icon } = alert[AlertType[severity]];

	return (
		<div
			className={`flex flex-row items-center justify-between gap-8 rounded border px-4 py-3 ${colorClasses}`}
			role='alert'
		>
			<div className='flex flex-row items-center gap-2'>
				<div>{icon}</div>
				<div className='text-xs md:text-sm'>{message}</div>
			</div>

			<div className='cursor-pointer' onClick={onClose}>
				<svg
					className={`h-5 w-5 fill-current`}
					role='button'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
				>
					<title>Close</title>
					<path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
				</svg>
			</div>
		</div>
	);
};

export default Alert;
