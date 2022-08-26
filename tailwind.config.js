/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primaryColor: '#F7F7F8',
				secondaryColor: '#564FB1',
				hoverColor: '#202124',

				darkBodyColor: '#050405',
				darkBgColor: '#17181B',
				darkTextColor: '#5E6D7B',
			},
		},
	},
	plugins: [require('daisyui')],
};
