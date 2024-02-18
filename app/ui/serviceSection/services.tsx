import React from 'react';
import ServiceCard from './serviceCard';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';

function Services() {
	return (
		<div className='grid grid-cols-4 gap-6'>
			<ServiceCard
				Icon={
					<ArchitectureOutlinedIcon
						sx={{
							fontSize: 70,
						}}
					/>
				}
				title='UI/UX Design'
				description='Lorem ipsum dolor sit amet consectetur. '
			/>
			<ServiceCard
				Icon={
					<ArchitectureOutlinedIcon
						sx={{
							fontSize: 70,
						}}
					/>
				}
				title='UI/UX Design'
				description='Lorem ipsum dolor sit amet consectetur. '
			/>
			<ServiceCard
				Icon={
					<DnsOutlinedIcon
						sx={{
							fontSize: 70,
						}}
					/>
				}
				title='UI/UX Design'
				description='Lorem ipsum dolor sit amet consectetur. '
			/>
			<ServiceCard
				Icon={
					<ArchitectureOutlinedIcon
						sx={{
							fontSize: 70,
						}}
					/>
				}
				title='UI/UX Design'
				description='Lorem ipsum dolor sit amet consectetur. '
			/>
		</div>
	);
}

export default Services;
