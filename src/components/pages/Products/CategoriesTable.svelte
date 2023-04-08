<script lang="ts">
	import { page } from '$app/stores';
	import type { Product, Category } from '@prisma/client';

	export let data: (Pick<Category, 'name' | 'slug'> & {
		_count: {
			products: number;
		};
	})[] = [];

	export let nextPage: number | null;
	export let previousPage: number | null;
	export let total: number | null;
	export let currentPage: string | null;
</script>

<div>
	<div class="relative overflow-x-auto shadow-md sm:rounded">
		<table class="w-full text-base text-left text-gray-300">
			<thead class="text-sm text-gray-100 uppercase bg-blue-700">
				<tr>
					<th scope="col" class="px-6 py-3"> Name </th>
					<th scope="col" class="px-6 py-3"> Products </th>
					<th scope="col" class="px-6 py-3">
						<span class="sr-only">Actions</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{#if data.length > 0}
					{#each data as product}
						<tr class="bg-gray-100 border-b hover:bg-gray-200 h-10">
							<th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
								{product.name}
							</th>
							<td class="px-6 py-4">
								<span class="py-2 px-2 bg-gray-300 rounded text-gray-700">
									{product._count.products}
								</span>
							</td>
							<td class="px-6 py-4 flex gap-2 flex-wrap text-right">
								<a href="#" class="font-medium text-gray-700 hover:underline"> Edit </a>
								<a href="#" class="font-medium text-gray-700 hover:underline"> Delete </a>
							</td>
						</tr>
					{/each}
				{:else}
					<tr class="bg-gray-100 border-b hover:bg-blue-600">
						<td colSpan={3} class="px-6 py-4 text-gray-700 text-center">
							No Category matches the current filter
						</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>

	<div class="flex justify-between gap-8 flex-wrap mt-8">
		<div class="flex gap-4 items-center">
			<p>Total: {total}</p>
			<p>Results: {currentPage}</p>
		</div>
		<div class="flex justify-end items-center gap-8">
			{#if previousPage !== null}
				<a
					class="bg-blue-600 text-white shadow shadow-blue-600 px-4 text-base hover:bg-blue-700 py-2"
					href={`${$page.url.pathname}?next=${previousPage}`}>Previous</a
				>
			{/if}
			{#if nextPage !== null}
				<a
					href={`${$page.url.pathname}?next=${nextPage}`}
					class="bg-blue-600 text-white shadow shadow-blue-600 px-4 text-base hover:bg-blue-700 py-2"
					>Next</a
				>
			{/if}
		</div>
	</div>
</div>
