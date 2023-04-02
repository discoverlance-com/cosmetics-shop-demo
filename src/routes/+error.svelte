<script lang="ts">
	import { page } from '$app/stores';
	import PrimaryNavigation from '$components/Layout/PrimaryNavigation.svelte';
	import PrimaryFooter from '$components/Layout/PrimaryFooter.svelte';
	import AppButtonLink from '$components/UI/links/AppButtonLink.svelte';
</script>

<svelte:head>
	<title>{$page.status}</title>
	<meta name="description" content={$page.error?.message ?? ''} />
</svelte:head>

<div class="bg-blue-700 pt-4 pl-4 pr-4 relative">
	<PrimaryNavigation />

	<main class="max-w-7xl mx-auto pb-16">
		<div class="text-center leading-8">
			<h1 class="lg:text-7xl md:text-5xl text-4xl tracking-widest text-white font-bold">
				{$page.status}
			</h1>
			<h2 class="text-white text-2xl tracking-wide font-semibold mt-4 mb-8">
				{$page.error?.message}
			</h2>

			<AppButtonLink href="/">Go to Homepage</AppButtonLink>
		</div>
	</main>

	<PrimaryFooter />
</div>
