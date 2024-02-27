import React from 'react';

interface ServiceProps {
	icon: string;
	label: string;
	description: string;
}

function ServiceCard({ icon, label, description }: ServiceProps) {
	return (
		<div className='sm:p-4 md:p-6 flex flex-col align-center items-center  content-center rounded-xl lg:py-8 space-y-1  bg-lightCards dark:bg-darkCards shadow-xl '>
			<div className='sm:text-5xl text-6xl dark:text-accent text-accent'>
				<span className={icon}></span>
			</div>
			<p className='pt-3 sm:text-lg text-center text-xl font-bold text-lightText dark:text-darkText'>
				{label}
			</p>
			<p className='text-lg sm:text-base text-lightSubtitle dark:text-darkSubtitle p-0 m-0 w-2/3 text-center'>
				{description}
			</p>
		</div>
	);
}

export default ServiceCard;
