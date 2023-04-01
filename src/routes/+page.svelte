<script>
	import Products from '$components/pages/Home/Products.svelte';
</script>

<svelte:head>
	<title>Home - My Cosmetics</title>
	<meta name="description" content="Demo Cosmetics website." />
</svelte:head>

<header>
	<h1 class="font-bold text-center text-white mb-8">
		<span class="md:text-4xl text-3xl lg:text-5xl">Welcome to</span>
		<span class="tracking-wider block md:text-5xl text-4xl lg:text-7xl pt-2 uppercase">
			My Cosmetics
		</span>
	</h1>

	<img
		src="/images/bg-hero.jpg"
		class="w-full h-96 rounded object-center object-fill"
		alt="Nail Polish samples"
	/>
</header>

<section class="my-16">
	<h2 class="font-bold text-white text-4xl">Our Products</h2>
	<p class="text-white mb-8">View our products</p>

	<Products />
</section>
