import Image from 'next/image';
import Button from '../components/Button';
import ButtonsGroup from '../layouts/ButtonsGroup';
import Navbar from '../components/UI/Navbar';
import HeaderOne from '../components/Landing/HeaderOne';
import LeftOne from '../components/Landing/LeftOne';
import RightOne from '../components/Landing/RightOne';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<div className='max-w-7xl w-full h-fit mx-auto p-4 gap-4 flex flex-col'>
				<HeaderOne />
				<div className='flex max-w-7xl w-full items-center gap-2 justify-between mx-auto'>
					<div className='w-1/2'>
						<LeftOne />
					</div>
					<div className='w-1/2'>
						<RightOne />
					</div>
				</div>
			</div>
		</main>
	);
}
