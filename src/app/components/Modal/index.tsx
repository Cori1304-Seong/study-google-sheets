import UploadIcon from '@/app/icons/UploadIcon';
import UpdateDiffTable from '../UpdateDiffTable';
import { MouseEventHandler } from 'react';

type ModalProps = {
	values: {
		old: string;
		new: string;
		isChanged: boolean;
	}[];
	isCreate?: boolean;
	handleClose: MouseEventHandler;
	handleSave: MouseEventHandler;
};

const Modal = ({
	values,
	isCreate = false,
	handleClose,
	handleSave,
}: ModalProps) => {
	const [header, description, buttonText] = isCreate
		? ['Create Record', 'Please verify and click create.', 'Create']
		: ['Update Details', 'Please verify and click update.', 'Update'];

	return (
		<div className='relative z-10'>
			<div
				className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
				aria-hidden='true'
			></div>
			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
					<div className='relative transform overflow-auto rounded-sm bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
						<div className='px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
							<div className='sm:flex sm:items-start'>
								<div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10'>
									<UploadIcon />
								</div>
								<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
									<h3
										className='text-base font-semibold leading-6 text-gray-900'
										id='modal-title'
									>
										{header}
									</h3>
									<div>
										<p className='text-sm text-gray-500'>{description}</p>
									</div>
								</div>
							</div>
							<div className='mx-2 mb-2 mt-4 overflow-auto'>
								<UpdateDiffTable values={values} />
							</div>
						</div>
						<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
							<button
								type='button'
								className='inline-flex w-full justify-center rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 sm:ml-3 sm:w-auto'
								onClick={handleSave}
							>
								{buttonText}
							</button>
							<button
								type='button'
								className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:mt-0 sm:w-auto'
								onClick={handleClose}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
