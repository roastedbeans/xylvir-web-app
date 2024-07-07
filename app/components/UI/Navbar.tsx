'use client';
import React from 'react';
import { Smiley, X } from '@phosphor-icons/react';
import NavbarItems from './NavbarItems';

const Navbar = () => {
	return (
		<div className='bg-custom-black-800 h-16 w-full font-openSans'>
			<div className='flex max-w-7xl w-full h-16 items-center justify-between mx-auto px-4'>
				<div className='max-w-[17rem] w-full'>
					<X
						size={48}
						className='text-white font-extrabold'
					/>
				</div>
				<h1 className='font-semibold text-2xl text-white uppercase'>Xylvir Group</h1>
				<NavbarItems />
			</div>
		</div>
	);
};

export default Navbar;
