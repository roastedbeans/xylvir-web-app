'use client';
import React from 'react';

const AboutUsPage = () => {
	const onClickButton = () => {
		console.log('i miss you');
	};
	return (
		<div>
			<button
				onClick={onClickButton}
				className='bg-reg border-white px-4 py-2'>
				Ris Cute
			</button>
		</div>
	);
};

export default AboutUsPage;
