'use client';
import React from 'react';
import { Smiley, X } from '@phosphor-icons/react';
import NavbarItems from './NavbarItems';

const Navbar = () => {
	return (
		<div className='bg-custom-black-800 h-16 w-full font-openSans fixed z-[999]'>
			<div className='flex max-w-7xl w-full h-16 items-center justify-between mx-auto md:px-10 px-4'>
				<h1 className='font-semibold text-2xl text-white uppercase'>What&apos;s Next?</h1>
				<NavbarItems />
			</div>
		</div>
	);
};

export default Navbar;
