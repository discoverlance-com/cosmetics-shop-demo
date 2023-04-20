<script>
	import { inject } from '@vercel/analytics';
	import GlobalNavigationSpinner from '$components/UI/spinners/GlobalNavigationSpinner.svelte';
	import '../app.css';

	import { webVitals } from '$lib/vitals';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	inject();

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}
</script>

<div class="relative">
	<slot />
	<GlobalNavigationSpinner />
</div>
