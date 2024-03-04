import React from 'react';

interface SectionTitleProps {
	label: string;
	description: string;
}

const SectionTitle = ({ label, description }: SectionTitleProps) => {
	return (
		<div className='flex flex-col items-center content-center mb-16'>
			<h2 className='text-5xl font-bold dark:text-darkText text-lightText'>
				{label}
			</h2>
			<p className='text-lg text-lightSubtitle dark:text-darkSubtitle p-0 m-0 w-2/3 text-center'>
				{description}
			</p>
		</div>
	);
};

export default SectionTitle;
