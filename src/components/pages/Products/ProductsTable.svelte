<script lang="ts">
	//@ts-ignore
	import PenIcon from 'svelte-icons/fa/FaPenAlt.svelte';
	import DeleteIcon from 'svelte-icons/fa/FaTrashAlt.svelte';

	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { Product, Category } from '@prisma/client';

	export let data: (Pick<Product, 'name' | 'image' | 'slug' | 'summary' | 'quantity'> & {
		category: Pick<Category, 'name'> | null;
		price: string;
	})[] = [];

	$: products = data;

	export let nextPage: number | null;
	export let previousPage: number | null;
	export let total: number | null;
	export let currentPage: string | null;

	let deleting: FormDataEntryValue | null = '';
</script>

<div>
	<div class="relative overflow-x-auto shadow-md sm:rounded">
		<table class="w-full text-base text-left text-gray-700">
			<thead class="text-sm text-gray-100 uppercase bg-blue-700">
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
				{#if products.length > 0}
					{#each products as product}
						<tr class="bg-gray-100 border-b hover:bg-gray-200 h-10">
							<th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
								{product.name}
							</th>
							<td class="px-6 py-4">
								<span class="py-2 px-2 bg-gray-300 rounded text-gray-700">
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
							<td class="px-6 py-4 flex gap-4 flex-wrap text-right">
								<a
									href={`/admin/products/${product.slug}/edit`}
									class="font-medium text-gray-700 hover:underline w-4 h-4 hover:text-blue-700"
								>
									<PenIcon />
									<span class="sr-only">Edit</span>
								</a>
								<form
									method="POST"
									action="?/delete"
									use:enhance={({ data }) => {
										const product = data.get('product');
										deleting = product;

										return async ({ update, result }) => {
											await update();
											if (result.type === 'redirect') {
												products = products.filter((product) => product.slug !== deleting);
											}
											deleting = '';
										};
									}}
								>
									<input type="hidden" name="product" value={product.slug} />
									<button
										type="submit"
										class="font-medium text-red-700 hover:text-red-800 hover:underline w-4 h-4"
										class:animate-bounce={deleting === product.slug}
									>
										{#if deleting === product.slug}
											...
										{:else}
											<DeleteIcon />
										{/if}

										<span class="sr-only">Delete</span>
									</button>
								</form>
							</td>
						</tr>
					{/each}
				{:else}
					<tr class="bg-blue-100 border-b hover:bg-blue-200">
						<td colSpan={7} class="px-6 py-4 text-gray-700 text-center">
							No Product matches the current filter
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
