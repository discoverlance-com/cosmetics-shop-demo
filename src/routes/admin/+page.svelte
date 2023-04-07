<script lang="ts">
	//@ts-nocheck
	import Chart from 'svelte-frappe-charts';
	import type { PageData } from './$types';

	export let data: PageData;

	let chartData = {
		labels: data.products.map((product) => product.name),
		datasets: [
			{
				values: data.products.map((product) => product.quantity)
			}
		]
	};
</script>

<svelte:head>
	<title>Admin - My Cosmetics</title>
</svelte:head>

<h1 class="font-bold text-4xl mb-8">Welcome</h1>
<div class="space-y-16">
	<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
		<div class="p-4 h-24 rounded bg-blue-50 leading-8">
			<p class="text-2xl font-semibold text-gray-500">Total Products</p>
			<p class="font-bold text-xl">{data.productsCount}</p>
		</div>
	</div>

	<div>
		<Chart
			data={chartData}
			type="line"
			title="Products and Quantity"
			colors={['rgb(37,99,235)', 'rgb(29,78,216)']}
		/>
	</div>
</div>
