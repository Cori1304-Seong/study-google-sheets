'use client';
import Body from './components/Body';
import StaticHeader from './components/StaticHeader';

const Home = () => {
	return (
		<div>
			<StaticHeader />
			<div className='container'>
				<section className='overflow-auto p-4 py-10'>
					<Body />
				</section>
			</div>
		</div>
	);
};

export default Home;
