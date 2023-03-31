/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-image': "url('/images/bg-hero.jpg')"
			}
		}
	},
	plugins: []
};
