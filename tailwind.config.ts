import type { Config } from 'tailwindcss';
// const { addDynamicIconSelectors } = require('@iconify/tailwind');
import { addDynamicIconSelectors } from '@iconify/tailwind';

const config: Config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			spacing: {
				'100': '28rem',
				'104': '32rem',
				'108': '36rem',
				'112': '40rem',
				'116': '44rem',
				'120': '48rem',
			},
			colors: {
				accent: '#0689E8',

				lightBg: '#F0F0F0',
				lightCards: '#FFFFFF',
				lightText: '#1F1E23',
				lightSubtitle: '#4C4C4C',
				lightSection: '#4E4E4E',
				lightIcon: '#1F1E23',
				lightBtn: '#1F1E23',
				lightBtnText: '#EDEDED',

				darkBg: '#1F1E23',
				darkCards: '#242329',
				darkText: '#EDEDED',
				darkSubtitle: '#A5A5A5',
				darkSection: '#4E4E4E',
				darkIcon: '#9E9E9E',
				darkBtn: '#fdfdfd',
				darkBtnText: '#1F1E23',
			},
			screens: {
				xs: '320px',
			},
		},
	},
	plugins: [addDynamicIconSelectors()],
};
export default config;
