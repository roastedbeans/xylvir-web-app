import AboutUsPage from '@/app/components/AboutUs/AboutUsPage';
import CharacterSelectionSection from '@/app/components/Anime/CharacterSelectionection';
import React from 'react';

const page = () => {
	return (
		<div className='min-h-screen h-fit w-full text-white p-4 max-w-7xl mx-auto'>
			<CharacterSelectionSection/>
		</div>
	);
};

export default page;
