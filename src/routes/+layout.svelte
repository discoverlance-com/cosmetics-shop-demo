<script>
	import { inject } from '@vercel/analytics';
	import GlobalNavigationSpinner from '$components/UI/spinners/GlobalNavigationSpinner.svelte';
	import '../app.css';

	inject();
</script>

<div class="relative">
	<slot />
	<GlobalNavigationSpinner />
</div>
