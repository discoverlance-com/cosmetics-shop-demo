<script lang="ts">
	import AppButtonLink from '$components/UI/links/AppButtonLink.svelte';
	import CategoriesTable from '$components/pages/Products/CategoriesTable.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Product Categories - My Cosmetics</title>
</svelte:head>

<div class="space-y-16">
	<div class="flex justify-between items-center mb-8">
		<h1 class="font-bold text-4xl">Product Categories</h1>
	</div>

	<CategoriesTable
		currentPage={data.currentPage}
		total={data.total}
		data={data.categories}
		previousPage={data.previousPage}
		nextPage={data.nextPage}
	/>
</div>
