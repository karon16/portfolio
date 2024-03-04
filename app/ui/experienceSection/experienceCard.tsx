import React from 'react';

const ExperienceCard = () => {
	return (
		<div className='flex flex-row items-center content-center justify-center  '>
			<div className=' w-1/6'>
				<p className='text-lg font-bold dark:text-accent text-accent'>
					LG electronics Intership
				</p>
				<p>June 2024 - August 2024</p>
			</div>
			<ol className='w-1/2 relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400'>
				<li className='m-6 ms-10'>
					<span className='absolute flex items-center justify-center w-6 h-6 bg-gray-500 rounded-full -start-3 top-1/2 -translate-y-1/2'></span>
					<p className='text-lg sm:text-base text-lightSubtitle dark:text-darkSubtitle mb-4'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
						commodi nihil pariatur? Provident inventore omnis laudantium dicta
						labore molestiae est! Atque dolorum temporibus obcaecati animi
						sapiente eligendi recusandae optio minima.
					</p>
					<div className='flex flex-row space-x-4'>
						<div className='cursor-pointer font-medium rounded-sm px-2 py-1 bg-lightBtn/10 text-darkBtnText dark:bg-darkBtn/10 dark:text-darkSubtitle'>
							HTML
						</div>
						<div className='cursor-pointer font-medium rounded-sm px-2 py-1 bg-lightBtn/10 text-darkBtnText dark:bg-darkBtn/10 dark:text-darkSubtitle'>
							CSS
						</div>
						<div className='cursor-pointer font-medium rounded-sm px-2 py-1 bg-lightBtn/10 text-darkBtnText dark:bg-darkBtn/10 dark:text-darkSubtitle'>
							JavaScript
						</div>
						<div className='cursor-pointer font-medium rounded-sm px-2 py-1 bg-lightBtn/10 text-darkBtnText dark:bg-darkBtn/10 dark:text-darkSubtitle'>
							NodeJs
						</div>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default ExperienceCard;
