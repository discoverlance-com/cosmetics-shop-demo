<script lang="ts">
	import AppButtonLink from '$components/UI/links/AppButtonLink.svelte';
	import ProductsTable from '$components/pages/Products/ProductsTable.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Products - My Cosmetics</title>
</svelte:head>

<div class="space-y-16">
	<div class="flex justify-between items-center mb-8">
		<h1 class="font-bold text-4xl">Products</h1>

		<AppButtonLink href="/admin/products/create" variant="inverted">Create</AppButtonLink>
	</div>

	<ProductsTable data={data.products} />
</div>
