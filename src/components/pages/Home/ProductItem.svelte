<script lang="ts">
	export let image: string | null;
	export let name: string;
	export let price: string;
	export let summary: string;
</script>

<div class="border-blue-600 border-8 p-4">
	<h3 class="font-bold text-3xl text-white">{name}</h3>
	<div>
		{#if image}
			<img
				src={image}
				alt={`${name} product`}
				class="w-full object-cover object-center mt-8 h-64 aspect-auto"
				width={1280}
				height={256}
			/>
		{/if}
	</div>
	<p class="border p-2 border-blue-500 mt-4 text-white">
		<span class="block">{summary}</span>
		<span class="block font-bold text-xl">
			US$ {price}
		</span>
	</p>
</div>
