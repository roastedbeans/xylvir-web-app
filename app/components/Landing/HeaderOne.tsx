import Image from 'next/image';
import React from 'react';

const HeaderOne = () => {
	return (
		<div className='bg-gradient-to-tr from-blue-900 to-blue-500 w-full h-64 rounded-xl text-custom-white-100 flex p-10 items-end justify-center relative'>
			<div className='absolute h-full z-0 top-0 p-10'>
				<Image
					src={'https://i.pinimg.com/originals/e3/82/52/e3825274a94bafc3f0282cae29c19972.png'}
					alt={'blue diamond'}
					width={200}
					height={200}
					className=' invert'
					style={{ objectFit: 'contain', width: 'auto', height: '100%' }}
				/>
			</div>
			<div className='w-full flex items-start h-fit z-10 gap-20'>
				<h1 className='font-bold text-6xl w-1/2 uppercase'>What&apos;s Next?</h1>
				<div className='w-1/2 flex justify-between items-start'>
					<h2 className='w-full text-center'>
						Accelerating the growth of <br />
						the next digital economy
					</h2>
					<button className='text-sm font-semibold px-6 py-3 border border-white hover:bg-white hover:text-blue-500 rounded-full h-fit w-fit text-nowrap uppercase'>
						Get Early Access
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeaderOne;
