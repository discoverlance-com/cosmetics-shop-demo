<script lang="ts">
	import { page } from '$app/stores';
	import AppButtonLink from '$components/UI/links/AppButtonLink.svelte';
</script>

<svelte:head>
	<title>{$page.status}</title>
	<meta name="description" content={$page.error?.message ?? ''} />
</svelte:head>

<div class="p-4 mt-14">
	<div class="text-center leading-8">
		<h1 class="lg:text-7xl md:text-5xl text-4xl tracking-widest text-gray-700 font-bold">
			{$page.status}
		</h1>
		<h2 class="text-gray-600 text-2xl tracking-wide font-semibold mt-4 mb-8">
			{$page.error?.message}
		</h2>
		<AppButtonLink href="/" variant="inverted">Go to Admin</AppButtonLink>
	</div>
</div>
