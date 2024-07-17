// CharacterSelectionSection.jsx
'use client';
import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import anime from '@/app/AnimeCharacters.json'
import { useCookies } from 'react-cookie';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const CharacterSelectionSection = () => {
const [changeAnime,setChangeAnime]=useState('');

const HandleChangeAnime=(name: string)=>
{	
	setChangeAnime(name);
	onClickChangeRouter(name);
	setCookie('Anime',(name));
}
const router = useRouter();
const [cookies, setCookie, removeCookie] = useCookies(['Anime']);
const onClickChangeRouter = (pathName: string) => {
	router.push(`/anime?name=${pathName}`);
};

useEffect(() => {
	if (cookies.Anime) {
		setChangeAnime(cookies.Anime);
	}
}, [cookies.Anime]);
console.log(cookies.Anime);

  return (
	<div className='flex flex-col w-full items-center justify-between gap-y-4'>
		
    <div className='w-full flex items-center text-white justify-around mx-auto'>
      {anime.characters.map((character, index) => (
		  <CharacterCard
          key={index}
          data={{ name: character.name, imageUrl: character.imageURL }}
          onClick={() =>HandleChangeAnime(character.name)}
		  />
		)
	)
}
</div>
	<p className='mt-3 text-3xl '>I have selected: {changeAnime}</p>

    </div>
  );
};

export default CharacterSelectionSection;
