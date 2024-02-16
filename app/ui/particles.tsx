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

const ParticlesHero = () => {
	const [init, setInit] = useState(false);
	// const [theme, setTheme] = useState('dark');
	// `${theme === 'dark' ? '#fff' : '#000000'}`;

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		setTheme(localStorage.theme);
	// 		// console.log(theme);
	// 	}
	// }, [theme]);

	// let currentTheme = theme;

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
						enable: false,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: '#fff',
				},
				links: {
					color: '#fff',
					distance: 150,
					enable: true,
					opacity: 0.2,
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
		}),
		[]
	);

	if (init) {
		return (
			<Particles
				id='tsparticles'
				particlesLoaded={particlesLoaded}
				options={options}
				style={{ width: 10 }}
				// height='auto'
			/>
		);
	}

	return <></>;
};

export default ParticlesHero;
