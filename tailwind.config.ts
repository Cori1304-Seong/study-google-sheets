import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '1.5rem',
				lg: '2rem',
			},
		},
		extend: {
			keyframes: {
				appear: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
			},
			animation: {
				appear: 'appear 1s ease-in-out',
			},
		},
	},
	plugins: [],
};
export default config;
