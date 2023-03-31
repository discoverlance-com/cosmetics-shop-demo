<script>
	import AppButtonLink from '$components/UI/links/AppButtonLink.svelte';
	import AppLink from '$components/UI/links/AppLink.svelte';
</script>

<nav class="flex justify-between max-w-7xl mx-auto mb-8">
	<div class="flex gap-8">
		<AppLink href="/">Home</AppLink>
	</div>

	<!-- Admin Button Link -->
	<AppButtonLink href="/admin">Admin</AppButtonLink>
</nav>
