import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			textAccent: '#0689E8',

			lightBg: '#fdfdfd',
			lightCards: '#FFFFFF',
			lightText: '#1C1C1C',
			lightSubtitle: '#4C4C4C',
			lightSection: '#4E4E4E',
			lightIcon: '#1C1C1C',

			darkBg: '#1C1C1C',
			darkCards: '#242329',
			darkText: '#EDEDED',
			darkSubtitle: '#A5A5A5',
			darkSection: '#4E4E4E',
			darkIcon: '#9E9E9E',
		},
	},
	plugins: [],
};
export default config;
