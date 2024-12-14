

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors:{
				mint: '#C9E3E0',
				teaRose: '#fbc8c6',
				ash_grey:'#A2BEB2',
				byzamtium: '#7d3066',
				yale_blue:'#144076'
			},
			animation: {
				fade_In: 'fadeIn 0.5s forwards',
				fade_Out: 'fadeOut 0.5s forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%':{
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				fadeOut: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%':{
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				},

			},
		},
	plugins: [],
}

