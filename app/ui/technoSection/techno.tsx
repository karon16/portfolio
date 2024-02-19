import React from 'react';
import TechnoCard from './technoCard';

const tech = [
	{ label: 'Javascript', icon: 'icon-[logos--javascript]' },
	{ label: 'TypeScript', icon: 'icon-[devicon--typescript]' },
	{ label: 'React js', icon: 'icon-[logos--react]' },
	{ label: 'CSS3', icon: 'icon-[devicon--css3]' },
	{ label: 'Docker', icon: 'icon-[skill-icons--docker]' },
	{ label: 'Node js', icon: 'icon-[vscode-icons--file-type-node]' },
	{ label: 'Git', icon: 'icon-[devicon--git]' },
	{ label: 'Redux', icon: 'icon-[logos--redux]' },
	{ label: 'Python', icon: 'icon-[logos--python]' },
	{ label: 'Html5', icon: 'icon-[devicon--html5]' },
	{ label: 'Next js', icon: 'icon-[skill-icons--nextjs-dark]' },
];

const Techno = () => {
	return (
		<div className='w-full flex flex-wrap grid-cols-6 justify-center gap-6 mb-32'>
			{tech.map((techno, index) => {
				return (
					<TechnoCard key={index} label={techno.label} icon={techno.icon} />
				);
			})}
		</div>
	);
};

export default Techno;
