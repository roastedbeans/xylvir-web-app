import React from 'react';

const navItems = [
	{
		label: 'Home',
		value: 'home',
		url: '/',
	},
	{
		label: 'About Us',
		value: 'about us',
		url: '/about-us',
	},
	{
		label: 'Login',
		value: 'login',
		url: '/login',
	},
	{
		label: 'Register',
		value: 'register',
		url: '/register',
	},
];

const NavbarItems = () => {
	return (
		<div className='w-fit flex gap-4 items-center text-white'>
			{navItems.map((item, index) => (
				<a
					className='hover:text-black border-1 border-white hover:bg-white rounded-full px-2 py-1'
					key={item.value}
					href={item.url}>
					{item.label}
				</a>
			))}
		</div>
	);
};

export default NavbarItems;
