'use client';

import React from 'react';
import Image from 'next/image';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks';
import { toggleTheme } from '../lib/redux/features/theme/themeSlice';

function Header() {
	const currentTheme = useAppSelector((state) => state.theme.currentTheme);
	const dispatch = useAppDispatch();

	return (
		<div className='flex  items-center content-center space-x-3 '>
			<div className='grow col-span-11 h-24 mb-2 py-7 flex content-center justify-between'>
				<div>
					{currentTheme != undefined && currentTheme === 'dark' ? (
						<Image
							height={80}
							width={80}
							// style={{ width: 'auto', height: 'auto' }}
							src='/chris.svg'
							alt='Logo portfolio Christopher Buhendwa'
						/>
					) : (
						<Image
							height={80}
							width={80}
							// style={{ width: 'auto', height: 'auto' }}
							src='/chris_light.svg'
							alt='Logo portfolio Christopher Buhendwa'
						/>
					)}

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
				onClick={() => {
					dispatch(toggleTheme());
				}}
			>
				{currentTheme === 'dark' ? (
					<LightModeOutlinedIcon />
				) : (
					<NightlightOutlinedIcon />
				)}
			</button>
		</div>
	);
}

export default Header;
