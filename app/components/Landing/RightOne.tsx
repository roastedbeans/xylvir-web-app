import Image from 'next/image';
import React from 'react';
import Arrow from '@/public/arrow.png';
const RightOne = () => {
	return (
		<div className='bg-[#DA3590] w-full h-[40rem] overflow-clip rounded-xl text-custom-white-100 flex flex-col items-center justify-between'>
			<div className='h-full flex flex-col justify-between p-10'>
				<div className='w-full flex justify-between'>
					<div className='h-fit z-0 flex items-center'>
						<h1 className='text-[0.75rem] -rotate-90 text-nowrap'>LAS VEGAS</h1>
						<h2 className='ml-[-1.7rem] font-normal text-4xl  '>
							<strong>
								LI&copy;ENSING <br></br>EXPO
							</strong>
						</h2>
					</div>
					<div className='top-5'>
						<button className=' text-sm font-semibold px-4 py-2 border border-white rounded-full h-fit w-fit text-nowrap uppercase'>
							Event
						</button>
					</div>
				</div>
				<div className='space-y-2'>
					<h1 className='text-xl text-nowrap'>Thank you for joining us in Vegas!</h1>
					<h2 className='text-[0.85rem] '>
						Spaceport was thrilled to be a participating sponsor at the 2023 Licensing Expo in <br></br>Las Vegas, the
						only global event to bring together thousands of brands under one <br></br>roof to enable conversations that
						help bring together brands in new and meaningful <br></br>ways.
					</h2>
				</div>

				<div className='flex items-center justify-around'>
					<div className='bg-white  h-[10rem] w-[14rem] rounded-xl text-black flex item-start p-6 space-y-4 relative'>
						<div className='w-full font-semibold flex flex-col items-start justify-between'>
							<h1 className='text-nowrap font-semibold items-start'>
								Spaceport for IP <br></br> holders{' '}
							</h1>

							<div className='flex item-center justify-between gap-4'>
								<h2 className='text-[0.60rem] space-y-6 text-nowrap '>
									SignUp to be a Spaceport<br></br>licensor and discover the<br></br>power of smart licenses
								</h2>
								<Image
									src={Arrow}
									alt={'black arrow'}
									width={40}
									height={40}
									style={{ objectFit: 'contain' }}
								/>
							</div>
						</div>
					</div>
					<div className='bg-white  h-[10rem] w-[14rem] rounded-xl text-black flex item-start p-6 space-y-4 relative '>
						<div className='w-full font-semibold flex flex-col items-start justify-between'>
							<h1 className='text-nowrap font-semibold items-start'>
								Find just the IP you<br></br> are looking for!{' '}
							</h1>

							<div className='flex item-center justify-between gap-4'>
								<h2 className='text-[0.60rem] space-y-6 text-nowrap '>
									SignUp to be a Spaceport<br></br>licensee and discover the<br></br>universe of possibilities
								</h2>
								<Image
									src={Arrow}
									alt={'black arrow'}
									width={40}
									height={40}
									style={{ objectFit: 'contain' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=' w-full -space-y-8 bg-[#B52575] z-20 py-6 px-10'>
				<div className='w-full text-[0.50rem]  h-[5.65rem] text-custom-white-100 flex items-center justify-between'>
					<div>
						Learn more about Spaceport and see a<br></br> demo of the platform by scheduling a<br></br> meeting with our
						team
					</div>
					<button className=' text-[.50rem] font-semibold px-10 py-5 border border-white rounded-full h-fit w-fit text-nowrap uppercase'>
						Schedule a meeting
					</button>
				</div>
			</div>
		</div>
	);
};

export default RightOne;
