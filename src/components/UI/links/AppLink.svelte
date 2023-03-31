<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
</script>

<a
	{href}
	class="px-4 py-2 text-gray-100 bg-inherit hover:bg-blue-600 focus:ring-4 focus:ring-blue-800 outline-none focus:outline-none"
	class:bg-blue-600={$page.url.pathname === href}
>
	<slot />
</a>
