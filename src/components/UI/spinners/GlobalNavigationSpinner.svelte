<script lang="ts">
	import { navigating } from '$app/stores';
</script>

<div
	class="fixed bottom-4 right-4 border-t-8 border-b-8 animate-spin rounded-full w-8 h-8 text-sm flex items-center justify-center"
	class:hidden={!$navigating}
	class:border-blue-700={$navigating?.to?.url.pathname.includes('admin') ||
		$navigating?.from?.url.pathname.includes('admin')}
	class:border-white={!$navigating?.from?.url.pathname.includes('admin')}
/>
