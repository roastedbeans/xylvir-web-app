import Image from 'next/image';
import React from 'react';
import Diamond from '@/public/blue-diamond.png';

const HeaderOne = () => {
	return (
		<div className='bg-gradient-to-tr from-blue-900 to-blue-500 w-full h-64 rounded-xl text-custom-white-100 flex p-10 items-end justify-center relative'>
			<div className='absolute h-fit z-0'>
				<Image
					src={Diamond}
					alt={'blue diamond'}
					width={200}
					height={200}
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div className='w-full flex items-start h-fit z-10'>
				<h1 className='font-normal text-6xl w-1/2'>Spaceport</h1>
				<h2 className='w-1/3 text-center'>
					Accelerating the growth of <br />
					the next digital economy
				</h2>
				<button className='text-sm font-semibold px-6 py-3 border border-white rounded-full h-fit w-fit text-nowrap uppercase'>
					Get Early Access
				</button>
			</div>
		</div>
	);
};

export default HeaderOne;
