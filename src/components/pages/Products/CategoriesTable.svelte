<script lang="ts">
	//@ts-ignore
	import PenIcon from 'svelte-icons/fa/FaPenAlt.svelte';
	import DeleteIcon from 'svelte-icons/fa/FaTrashAlt.svelte';
	import { page } from '$app/stores';
	import type { Category } from '@prisma/client';

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
					{#each data as category}
						<tr class="bg-gray-100 border-b hover:bg-gray-200 h-10">
							<th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
								{category.name}
							</th>
							<td class="px-6 py-4">
								<span class="py-2 px-2 bg-gray-300 rounded text-gray-700">
									{category._count.products}
								</span>
							</td>
							<td class="px-6 py-4 flex gap-2 flex-wrap text-right">
								<a
									href={`/admin/products/categories/${category.slug}/edit`}
									class="font-medium text-gray-700 hover:underline w-4 h-4 hover:text-blue-700"
								>
									<PenIcon />
									<span class="sr-only">Edit</span>
								</a>
								<button class="font-medium text-red-700 hover:text-red-800 hover:underline w-4 h-4">
									<DeleteIcon />
									<span class="sr-only">Delete</span>
								</button>
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
