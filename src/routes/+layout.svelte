<script>
	import GlobalNavigationSpinner from '$components/UI/spinners/GlobalNavigationSpinner.svelte';
	import '../app.css';
</script>

<div class="relative">
	<slot />
	<GlobalNavigationSpinner />
</div>
