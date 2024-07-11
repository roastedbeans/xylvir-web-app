'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Circle from '@/public/story.png';
import { useCookies } from 'react-cookie';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Fish } from '@phosphor-icons/react';

interface LeftOneProps {
	content: string;
	data: {
		header: string;
		subHeader: string;
	};
}

const LeftOne = ({ content, data }: LeftOneProps) => {
	const isAuthenticated = true;
	const [risLanguage, setRisLanguage] = useState<string>('');
	const [changeColor, setChangeColor] = useState<string>('');
	const [languageIndex, setLanguageIndex] = useState<number>(0);

	const [cookies, setCookie, removeCookie] = useCookies(['isAuthenticated', 'language']);

	const router = useRouter();

	console.log(content, data);

	useEffect(() => {
		setCookie('isAuthenticated', true);
	}, []);

	const params = useSearchParams();

	console.log(params.getAll('userId'));
	console.log(params.getAll('birthday'));

	useEffect(() => {
		if (risLanguage === 'english') {
			setChangeColor('text-red-500');
			setCookie('language', 'english');
		} else if (risLanguage === 'korean') {
			setChangeColor('text-blue-500');
			setCookie('language', 'korean');
		} else if (risLanguage === 'japanese') {
			setChangeColor('text-purple-500');
			setCookie('language', 'japanese');
		}
	}, [risLanguage]);

	useEffect(() => {
		if (cookies.isAuthenticated) {
			setRisLanguage(cookies.language);
		}
	}, [cookies.isAuthenticated]);
	console.log(cookies.isAuthenticated);

	const languages = ['english', 'korean', 'japanese'];

	const onClickChangeRouter = (pathName: string) => {
		router.push(`/${pathName}`);
	};

	const onClickChangeLanguage = () => {
		setRisLanguage(languages[languageIndex]);
		setLanguageIndex(languageIndex + 1);
		if (languageIndex === 2) {
			setLanguageIndex(0);
		}
	};

	return (
		<div className='bg-[#2C2D32] w-full h-[40rem] rounded-xl text-custom-white-100 flex flex-col p-10 items-start justify-between relative'>
			<div>
				<div className='h-fit z-0 top-8 left-8 flex gap-4 w-fit'>
					<Image
						src={Circle}
						alt={'multiple circles'}
						className='invert'
						width={40}
						height={40}
						style={{ objectFit: 'contain' }}
					/>
					<h1 className='font-bold text-4xl w-full'>{data?.header}</h1>
				</div>
				<h2 className='text-base font-normal'>{data?.subHeader}</h2>
				<br />
				<h2 className='p-6 border border-white rounded-xl max-w-sm w-full text-center mx-auto'>{content}</h2>
			</div>
			<div>
				<div className='flex gap-4'>
					<Fish size={40} />
					<h1 className='font-bold text-4xl w-full'>{'Hooks'}</h1>
				</div>

				<h2 className='text-base font-normal'>{' useState, useEffect & useCookies'}</h2>
			</div>
			<div className='flex w-full justify-between'>
				<div>
					<h2>Choose a language to speak?</h2>
					<span className={`text-2xl ${changeColor}`}>{risLanguage}</span>
				</div>
				<div>
					{risLanguage === 'korean' ? (
						<></>
					) : (
						<h2 className='w-fit h-fit bg-white p-4 rounded-full text-[#2C2D32]'>Hide me when Korean</h2>
					)}
				</div>
			</div>
			<button
				onClick={onClickChangeLanguage}
				className='bg-white p-4 rounded-lg text-black'>
				Change Language
			</button>
		</div>
	);
};

export default LeftOne;
