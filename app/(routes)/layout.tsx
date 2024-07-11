import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import '../globals.css';
import Navbar from '../components/UI/Navbar';

const inter = Inter({ subsets: ['latin'] });

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
	variable: '--open-sans',
});

export const metadata: Metadata = {
	title: "What's Next?",
	description: 'Getting started with my next project',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${openSans.variable}`}>
				<div className='bg-custom-black-800'>
					<div className='pb-16'>
						<Navbar />
					</div>
					{children}
				</div>
			</body>
		</html>
	);
}
