// CharacterCard.jsx
'use client';
import React from 'react';
import Image from 'next/image';

interface CharacterCardProps {
  data: {
    name: string;
    imageUrl: string;
  };
  onClick?: () => void;
}

const CharacterCard=({ data, onClick }:CharacterCardProps) => {
  const { name, imageUrl } = data;
  console.log(name,imageUrl);

  return (
    <div

      className='flex flex-col items-center justify-center w-1/4 h-80 rounded-3xl overflow-clip bg-white relative hover:border-4 border-white '
      onClick={onClick}
      style={{
        width: 240,
      }}
    >
      <Image
      style={{objectFit:'cover',height:'100%', width:'auto'}}
        alt={name}
        src={imageUrl}
        width={800}
        height={800}
        className="rounded-t-sm cursor-pointer transition  absolute z-0"
      />
      <p className=' w-full h-full hover:bg-white/50 z-20 flex flex-col font-semibold text-xl
       items-center justify-center bg-transparent text-transparent hover:text-white
       absolute'><span className='drop-shadow-md'>{name}</span></p>
    </div>
  );
}

export default CharacterCard;
