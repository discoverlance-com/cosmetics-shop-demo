// import adapter from '@sveltejs/adapter-cloudflare';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			'$components/*': './src/components',
			'$store/*': './src/store',
			'$utils/*': './src/utils'
		},
		adapter: adapter({})
	}
};

export default config;
