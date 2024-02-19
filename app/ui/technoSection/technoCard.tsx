import React from 'react';

interface TechnoInterface {
	label: string;
	icon: string;
}

const TechnoCard = ({ label, icon }: TechnoInterface) => {
	return (
		<div className='w-60 h-44 flex flex-col items-center content-center justify-center  rounded-xl dark:border-none  bg-lightCards dark:bg-darkCards '>
			<div className='text-6xl'>
				<span className={icon}></span>
			</div>
			<p className='font-medium text-lg text-lightSubtitle dark:text-darkSubtitle'>
				{label}
			</p>
		</div>
	);
};

export default TechnoCard;
