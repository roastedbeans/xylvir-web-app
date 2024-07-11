import HeaderOne from '../components/Landing/HeaderOne';
import LeftOne from '../components/Landing/LeftOne';
import RightOne from '../components/Landing/RightOne';

export default function Home() {
	const dataToPass = {
		header: 'Props Passing',
		subHeader: 'Learning how to pass props from parent component to the children.',
	};

	const content = 'This is a sample content to pass on the leftOne card component.';

	return (
		<main className='flex min-h-screen flex-col'>
			<div className='max-w-7xl w-full h-fit mx-auto md:p-10 p-4 gap-4 flex flex-col'>
				<HeaderOne />
				<div className='flex max-w-7xl w-full items-center gap-4 justify-between mx-auto'>
					<div className='w-1/2'>
						<LeftOne
							content={content}
							data={dataToPass}
						/>
					</div>
					<div className='w-1/2'>
						<RightOne />
					</div>
				</div>
			</div>
		</main>
	);
}
