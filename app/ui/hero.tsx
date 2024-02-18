import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ParticlesHero from './particles';

function Hero() {
	return (
		<div className='w-full h-120'>
			<ParticlesHero />
			<div className='w-full h-120 flex flex-col items-center justify-center   space-y-8'>
				<p className='text:lightText dark:text-darkText font-bold text-7xl p-0 m-0 text-center '>
					Building Beautiful <span className='text-accent'>Frontend</span>
					<br /> Coding Future <span className='text-accent'>AI</span>
				</p>
				<p className='text-lg text-lightSubtitle dark:text-darkSubtitle p-0 m-0 w-2/5 text-center '>
					I design captivating user interfaces and engineer innovative web{' '}
					<br />
					experiences. Passionate about merging aesthetics with intelligence, I
					am on a journey to contribute to the future of AI technology.
				</p>
				<div className='w-96 flex items-center justify-center content-center space-x-5 '>
					<button className='cursor-pointer font-medium rounded-md px-4 py-2 bg-lightBtn text-lightBtnText dark:bg-darkBtn dark:text-darkBtnText'>
						Contact me
					</button>
					<button className='cursor-pointer font-medium rounded-md px-4 py-2 bg-none border-2 border-slate-950/20 dark:border-slate-50/20'>
						Download cv
					</button>
					<GitHubIcon />
				</div>
			</div>
		</div>
	);
}

export default Hero;
