import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ProjectCard = () => {
	return (
		<div className='flex flex-col rounded-xl dark:bg-darkCards pb-6 w-96 '>
			<div className=''>
				<Image
					sizes='100%'
					style={{
						width: '100%',
						height: 'auto',
					}}
					width={500}
					height={300}
					src='/prototype.jpg'
					alt='project screenshot'
					className='rounded-xl'
				/>
			</div>
			<div className='flex flex-col divide-y divide-slate-50/20 px-6'>
				<div className='flex flex-col space-y-4 pt-5'>
					<p className=' sm:text-lg text-2xl font-semibold text-lightText dark:text-darkText'>
						Project Name
					</p>
					<p className='text-lg sm:text-base text-lightSubtitle dark:text-darkSubtitle '>
						Project Descrition Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Autem eveniet, recusandae, unde fuga non quasi
						reprehenderit molestias obcaecati debitis, labore eligendi tempore
						officia repudiandae rerum tempora porro eius facilis beatae?
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
				</div>
				<div className='flex flex-row justify-between mt-4 pt-3'>
					<div className='sm:text-base text-lightSubtitle dark:text-darkSubtitle '>
						<Link href=''>Live Preview</Link>
					</div>
					<div className='sm:text-base text-lightSubtitle dark:text-darkSubtitle '>
						<Link href=''>View Code</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
