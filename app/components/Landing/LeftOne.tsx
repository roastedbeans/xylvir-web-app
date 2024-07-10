import Image from 'next/image';
import React from 'react';
import Circle from '@/public/story.png';
const LeftOne = () => {
	return (
		<div className='bg-[#2C2D32] w-full h-[40rem] rounded-xl text-custom-white-100 flex flex-col p-10 items-start justify-between relative'>
			<div>
				<div className='h-fit z-0 top-8 left-8'>
					<Image
						src={Circle}
						alt={'multiple circles'}
						className='invert'
						width={100}
						height={100}
						style={{ objectFit: 'contain' }}
					/>
				</div>
				<h1 className='font-normal text-4xl w-full'>
					Tools for creators,<br></br> brands, and agents to<br></br> monetize their IP <br></br>portfolio using{' '}
					<span className='text-blue-700'>
						smart<br></br> licenses*
					</span>
				</h1>
			</div>
			<div className='space-y-6'>
				<p>*smart license  \ noun</p>
				<p>
					A new standard for IP licensing pioneered by spaceport that combines legally enforceable PDF agreements with
					digitally verifiable authenticity and transparency
				</p>
			</div>
		</div>
	);
};

export default LeftOne;
