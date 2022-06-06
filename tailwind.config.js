module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			smol: { max: '430px' },
		},
		extend: {
			fontFamily: {
				heading: ['Pacifico', 'serif'],
			},
		},
	},
	plugins: [],
};
