<script>
	import AppButtonLink from '$components/UI/links/AppButtonLink.svelte';
</script>

<svelte:head>
	<title>Products - My Cosmetics</title>
</svelte:head>

<div class="space-y-16">
	<div class="flex justify-between items-center mb-8">
		<h1 class="font-bold text-4xl">Products</h1>

		<AppButtonLink href="/admin/products/create" variant="inverted">Create</AppButtonLink>
	</div>

	<!-- <ProductsTable /> -->
</div>
