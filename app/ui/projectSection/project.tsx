import React from 'react';
import { ProjectCard } from './projectCard';

const Projects = () => {
	return (
		<div className='flex flex-col items-center justify-center space-y-6 mb-32'>
			<div className='flex flex-row space-x-6 justify-center align-middle content-center items-end'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
			<button className='cursor-pointer font-medium rounded-md px-4 py-2 bg-lightBtn text-lightBtnText dark:bg-darkBtn dark:text-darkBtnText'>
				Discover more
			</button>
		</div>
	);
};

export default Projects;
