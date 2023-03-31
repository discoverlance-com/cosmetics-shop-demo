<script>
	import '../app.css';
	import PrimaryNavigation from '$components/Layout/PrimaryNavigation.svelte';
	import PrimaryFooter from '$components/Layout/PrimaryFooter.svelte';
</script>

<div class="bg-blue-700 pt-4 pl-4 pr-4 relative">
	<PrimaryNavigation />

	<main class="max-w-7xl mx-auto pb-16"><slot /></main>

	<PrimaryFooter />
</div>
