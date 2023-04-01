<script>
	import AdminHeader from '$components/Layout/AdminHeader.svelte';
	import AdminSidebar from '$components/Layout/AdminSidebar.svelte';
</script>

<div class="relative bg-white">
	<!-- Header -->
	<!-- <AppBanner>
		We only keep the data for demo purposes. So changes might not show up or be deleted with time.
	</AppBanner> -->
	<AdminHeader />
	<!-- Sidebar -->
	<AdminSidebar />
	<!-- Main Page Content -->
	<main class="p-4 sm:ml-64 text-gray-700">
		<div class="p-4 mt-14">
			<slot />
		</div>
	</main>
</div>
