<script lang="ts">
	import { page } from '$app/stores';
	import type { Product, Category } from '@prisma/client';

	export let data: (Pick<Product, 'name' | 'image' | 'slug' | 'summary' | 'quantity'> & {
		category: Pick<Category, 'name'> | null;
		price: string;
	})[];

	export let nextPage: number | null;
	export let previousPage: number | null;
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded">
	<table class="w-full text-base text-left text-gray-300">
		<thead class="text-sm text-gray-700 uppercase bg-gray-100">
			<tr>
				<th scope="col" class="px-6 py-3"> Name </th>
				<th scope="col" class="px-6 py-3"> Category </th>
				<th scope="col" class="px-6 py-3"> Price </th>
				<th scope="col" class="px-6 py-3"> Quantity </th>
				<th scope="col" class="px-6 py-3"> Image </th>
				<th scope="col" class="px-6 py-3"> Summary </th>
				<th scope="col" class="px-6 py-3">
					<span class="sr-only">Actions</span>
				</th>
			</tr>
		</thead>
		<tbody>
			{#if data.length > 0}
				{#each data as product}
					<tr class="bg-blue-700 border-b hover:bg-blue-600 h-10">
						<th scope="row" class="px-6 py-4 font-medium text-gray-100 whitespace-nowrap">
							{product.name}
						</th>
						<td class="px-6 py-4">
							<span class="py-2 px-2 bg-gray-100 rounded text-gray-700">
								{product.category?.name}
							</span>
						</td>
						<td class="px-6 py-4">$ {product.price.toString()}</td>
						<td class="px-6 py-4">{product.quantity}</td>
						<td class="px-6 py-4">
							{#if product.image}
								<img
									alt={product.name}
									src={product?.image}
									height={40}
									width={120}
									class="object-center h-10"
								/>
							{/if}
						</td>
						<td class="px-6 py-4 text-sm">{product.summary}</td>
						<td class="px-6 py-4 flex gap-2 flex-wrap text-right">
							<a href="#" class="font-medium text-gray-200 hover:underline"> Edit </a>
							<a href="#" class="font-medium text-gray-200 hover:underline"> Delete </a>
						</td>
					</tr>
				{/each}
			{:else}
				<tr class="bg-blue-700 border-b hover:bg-blue-600">
					<td colSpan={7} class="px-6 py-4 text-white text-center">
						No Product matches the current filter
					</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<div class="flex justify-end items-center gap-8">
	{#if previousPage !== null}
		<a
			class="bg-blue-400 text-white shadow shadow-blue-400 px-4 text-base hover:bg-blue-600 py-2"
			href={`${$page.url.pathname}?next=${previousPage}`}>Previous</a
		>
	{/if}
	{#if nextPage !== null}
		<a
			href={`${$page.url.pathname}?next=${nextPage}`}
			class="bg-blue-400 text-white shadow shadow-blue-400 px-4 text-base hover:bg-blue-600 py-2"
			>Next</a
		>
	{/if}
</div>
