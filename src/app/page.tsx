'use client';
import Body from './components/Body';
import { SheetContextProvider } from './context/SheetContext';

const Home = () => {
	return (
		<section className='py-24'>
			<div className='container'>
				<SheetContextProvider>
					<Body />
				</SheetContextProvider>
			</div>
		</section>
	);
};

export default Home;
