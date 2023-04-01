<script>
	import AppButton from '$components/UI/button/AppButton.svelte';
	import ProductItem from './ProductItem.svelte';

	function handleLoadMore() {
		console.log('Loading more products...');
	}
</script>

<div>
	<!-- List -->
	<ul class="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
		<!-- <p class="text-xl mt-8 col-span-full">
			No products added yet. Please visit at another time
		</p> -->
		<ProductItem
			name="Product 1"
			price="0.00"
			summary="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel natus atque magni laborum, magnam omnis amet!"
			image="/images/bg-hero.jpg"
		/>
	</ul>

	<div class="mt-16 flex">
		<AppButton on:click={handleLoadMore}>Load More</AppButton>
	</div>
</div>
