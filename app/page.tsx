'use client';

import React from 'react';
import Hero from './ui/hero';
import Services from './ui/serviceSection/services';

export default function Home() {
	return (
		<main>
			<Hero />
			<div className='flex flex-col items-center content-center pb-8'>
				<h2 className='text-5xl font-bold dark:text-darkSection text-lightSection'>
					My Services
				</h2>
				<p className='text-lg text-lightSubtitle dark:text-darkSubtitle p-0 m-0 w-2/3 text-center'>
					Lorem ipsum idoloret nampun
				</p>
			</div>

			<Services />
		</main>
	);
}
