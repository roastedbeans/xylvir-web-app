'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const AboutUsPage = () => {
	const onClickButton = () => {
		console.log('i miss you');
	};

	const pathName = usePathname();
	console.log(pathName);
	return (
		<div>
			<span className='text-lg text-white'>{pathName}</span>
			<button
				onClick={onClickButton}
				className='bg-reg border-white px-4 py-2'>
				Ris Cute
			</button>
		</div>
	);
};

export default AboutUsPage;
