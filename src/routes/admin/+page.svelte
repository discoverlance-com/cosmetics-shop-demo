<script>
	//@ts-nocheck
	import Chart from 'svelte-frappe-charts';

	let data = {
		labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
		datasets: [
			{
				values: [10, 12, 3, 9, 8, 15, 9]
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
			<p class="font-bold text-xl">200</p>
		</div>
	</div>

	<div>
		<Chart {data} type="line" />
	</div>
</div>
