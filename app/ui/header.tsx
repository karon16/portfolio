'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import Link from 'next/link';

function Header() {
	const [theme, setTheme] = useState(
		typeof window !== 'undefined' ? localStorage.theme : 'dark'
	);

	const colorTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(colorTheme);
		root.classList.add(theme);

		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', theme);
		}
	}, [colorTheme, theme]);

	return (
		<div className='flex  items-center content-center space-x-3 '>
			<div className='grow col-span-11 h-24 mb-2 py-7 flex content-center justify-between'>
				<div>
					<Image
						height={80}
						width={80}
						src={`${theme === 'dark' ? '/chris.svg' : '/chris_light.svg'}`}
						alt='Logo portfolio Christopher Buhendwa'
					/>
					<p className='text-lightText dark:text-darkSubtitle '>
						Frontend Developer | AI Student
					</p>
				</div>
				<div className='flex items-center justify-center  space-x-12 text-md'>
					{[
						['About', '/'],
						['Skills', '/'],
						['Projects', '/'],
					].map(([title, url]) => (
						<Link
							key={title}
							href={url}
							className='text-center text-lightText dark:text-darkSubtitle'
						>
							{title}
						</Link>
					))}
					<button className='cursor-pointer font-medium rounded-md px-4 py-2 bg-lightBtn text-lightBtnText dark:bg-darkBtn dark:text-darkBtnText'>
						Contact me
					</button>
				</div>
			</div>

			<button
				className='mb-2 cursor-pointer'
				onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
			>
				{theme === 'light' ? <LightModeIcon /> : <NightlightIcon />}
			</button>
		</div>
	);
}

export default Header;
