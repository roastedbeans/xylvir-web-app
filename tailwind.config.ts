import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'custom-black-900': '#09090B',
				'custom-black-800': '#1C1917',
				'custom-black-700': '#2F2C25',
				'custom-black-600': '#424136',
				'custom-black-500': '#55564A',
				'custom-black-400': '#68695E',
				'custom-black-300': '#7B7C72',
				'custom-black-200': '#8E8F86',
				'custom-black-100': '#A1A29A',
				'customer-white-200': '#E7E5E4',
				'custom-white-100': '#FAFAFA',
			},
			fontFamily: {
				openSans: ['var(--open-sans)'],
			},
			borderRadius: {
				'ris-radius': '60px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
