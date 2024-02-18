import React from 'react';

interface ServiceProps {
	Icon: React.ReactElement;
	title: string;
	description: string;
}

function ServiceCard({ Icon, title, description }: ServiceProps) {
	return (
		<div className='flex flex-col align-center items-center  content-center rounded-xl py-8 space-y-1 shadow-xl bg-lightCards dark:bg-darkCards'>
			<div className='dark:text-darkIcon text-lightIcon'>{Icon}</div>
			<p className='text-xl font-bold text-lightText dark:text-darkText'>
				{title}
			</p>
			<p className='text-lg text-lightSubtitle dark:text-darkSubtitle p-0 m-0 w-2/3 text-center'>
				{description}
			</p>
		</div>
	);
}

export default ServiceCard;
