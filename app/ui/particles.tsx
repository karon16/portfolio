'use client';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
	type Container,
	type ISourceOptions,
	// MoveDirection,
	// OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useAppSelector } from '../lib/redux/hooks';

const ParticlesHero = () => {
	const currentTheme = useAppSelector((state) => state.theme.currentTheme);
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		// console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: 'none',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'grab',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					// repulse: {
					// 	distance: 200,
					// 	duration: 0.4,
					// },
				},
			},
			particles: {
				color: {
					value: `${currentTheme === 'dark' ? '#fff' : '#000'}`,
					opacity: 0.1,
				},
				links: {
					color: `${currentTheme === 'dark' ? '#fff' : '#000'}`,
					distance: 150,
					enable: true,
					opacity: 0.1,
					width: 1,
				},
				move: {
					enable: true,
					random: false,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 130,
				},
				opacity: {
					value: 0.4,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 0.5, max: 3 },
				},
			},
			detectRetina: true,
			style: {
				// zIndex: 0,
			},
		}),
		[currentTheme]
	);

	if (init) {
		return (
			<Particles
				id='tsparticles'
				particlesLoaded={particlesLoaded}
				options={options}
				// style={{ width: 10 }}
				// height='auto'
			/>
		);
	}

	return <></>;
};

export default ParticlesHero;
