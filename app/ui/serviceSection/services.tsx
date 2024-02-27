import React from 'react';
import ServiceCard from './serviceCard';

const services = [
	{
		label: 'UI/UX Design',
		icon: 'icon-[solar--figma-outline]',
		description: 'Lorem ipsum dolor sit amet consectetur.',
	},
	{
		label: 'Frontend Development',
		icon: 'icon-[lucide--code-2]',
		description: 'Lorem ipsum dolor sit amet consectetur.',
	},
	{
		label: 'Backend',
		icon: 'icon-[mdi--server-outline]',
		description: 'Lorem ipsum dolor sit amet consectetur.',
	},
	{
		label: 'Machine Learning',
		icon: 'icon-[fluent--brain-circuit-24-regular]',
		description: 'Lorem ipsum dolor sit amet consectetur.',
	},
];

function Services() {
	return (
		<div className='xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-4 grid grid-cols-4 gap-6 mb-32'>
			{services.map((service, index) => {
				return (
					<ServiceCard
						key={index}
						icon={service.icon}
						label={service.label}
						description={service.description}
					/>
				);
			})}
		</div>
	);
}

export default Services;
