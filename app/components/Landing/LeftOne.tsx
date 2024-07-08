import Image from 'next/image';
import React from 'react';
import Circle from '@/public/story.png';
const LeftOne = () => {
	return (
		<div className='bg-gray-700 w-1/2 h-96 rounded-xl text-custom-white-100 flex p-10 items-end justify-center relative'>
            <div className='absolute h-fit z-0 top-8 left-8'>
				<Image
					src={Circle}
					alt={'multiple circles'}
					width={100}
					height={100}
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div className='absolute h-fit z-0'>
			</div>
			<div className='w-full flex place-items-center h-fit z-10'>
				<h1 className='font-normal text-4xl w-full'>Tools for creators,<br></br> brands, and agents to<br></br> monetize their IP <br></br>portfolio using <span className='text-blue-950'>smart<br></br> licenses*</span></h1>
			</div>
		</div>
	);
};

export default LeftOne;
