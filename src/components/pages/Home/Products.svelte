<script lang="ts">
	import { navigating } from '$app/stores';
	import type { Product } from '@prisma/client';

	import AppButtonLink from '$components/UI/links/AppButtonLink.svelte';
	import ProductItem from './ProductItem.svelte';

	export let products: (Pick<Product, 'name' | 'quantity' | 'slug' | 'image' | 'summary'> & {
		price: string;
	})[];
	export let cursor: number;
	export let isDone = false;
</script>

<div>
	<!-- List -->
	<ul class="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
		{#if products.length > 0}
			{#each products as product}
				<ProductItem
					name={product.name}
					price={product.price}
					summary={product.summary}
					image={product.image}
				/>
			{/each}
		{:else}
			<p class="text-xl text-white mt-8 col-span-full">
				No products added yet. Please visit at another time
			</p>
		{/if}
	</ul>

	<div class="mt-16 flex">
		{#if !isDone}
			<AppButtonLink href={`/?next=${cursor}`} noScroll>
				{#if $navigating}
					Loading...
				{:else}
					Loading More
				{/if}
			</AppButtonLink>
		{/if}
	</div>
</div>
