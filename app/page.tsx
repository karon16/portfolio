'use client';

import React from 'react';
import Hero from './ui/hero';
import Services from './ui/serviceSection/services';
import SectionTitle from './ui/sectionTitle';
import Techno from './ui/technoSection/techno';
import Projects from './ui/projectSection/project';
import Experience from './ui/experienceSection/experience';
// import ParticlesHero from './ui/particles';

export default function Home() {
	return (
		<main>
			{/* <ParticlesHero /> */}

			<Hero />
			<SectionTitle
				label='My Services'
				description='Lorem ipsum dolor sit amet, consectetur'
			/>
			<Services />
			<SectionTitle
				label='My tech stacks'
				description='A glimpse of the technology I use'
			/>
			<Techno />
			<SectionTitle
				label='Recent projects'
				description='Have a look on my recent projects'
			/>
			<Projects />
			<SectionTitle
				label='My Experience'
				description='Have a look on my recent projects'
			/>
			<Experience />
		</main>
	);
}
