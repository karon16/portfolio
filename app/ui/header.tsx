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
		<div className='h-24 py-7 flex content-center sm:justify-between'>
			<div className='h-10'>
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
			<div className='h-10 grid grid-cols-4 sm:justify-center content-center space-x-4'>
				{[
					['About', '/'],
					['Skills', '/'],
					['Projects', '/'],
				].map(([title, url]) => (
					<Link
						key={title}
						href={url}
						className='text-lightText dark:text-darkText '
					>
						{title}
					</Link>
				))}

				<button
					onClick={() =>
						theme == 'dark' ? setTheme('light') : setTheme('dark')
					}
				>
					{theme === 'light' ? <LightModeIcon /> : <NightlightIcon />}
				</button>
			</div>
		</div>
	);
}

export default Header;
