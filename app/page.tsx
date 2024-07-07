import Image from 'next/image';
import Button from './components/Button';
import ButtonsGroup from './layouts/ButtonsGroup';
import Navbar from './components/UI/Navbar';
import HeaderOne from './components/Landing/HeaderOne';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-custom-black-800'>
			<Navbar />
			<div className='max-w-7xl w-full h-fit mx-auto p-4 gap-10 flex flex-col'>
				<HeaderOne />
			</div>
		</main>
	);
}
