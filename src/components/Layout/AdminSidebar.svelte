<script lang="ts">
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	import { navigation } from '$store/navigation';
	import { clickOutside } from '$utils/clickOutside';

	import DashboardIcon from 'svelte-icons/fa/FaDashcube.svelte';
	import BriefCaseIcon from 'svelte-icons/fa/FaBriefcase.svelte';
	import { beforeUpdate } from 'svelte';

	beforeUpdate(() => {
		if ($navigating && $navigation.open) {
			$navigation.open = false;
		}
	});
</script>

<aside
	id="logo-sidebar"
	class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full duration-300 bg-blue-700 border-r border-blue-200 sm:translate-x-0"
	class:translate-x-0={$navigation.open === true}
	use:clickOutside={() => {
		$navigation.open = false;
	}}
	aria-label="Sidebar"
>
	<div class="h-full px-3 pb-4 overflow-y-auto bg-blue-700">
		<ul class="space-y-2 font-medium">
			<li class="group">
				<a
					href="/admin"
					class="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-100"
					class:bg-gray-100={$page.url.pathname === '/admin'}
				>
					<span
						class={`w-6 h-6 transition duration-75 group-hover:text-gray-400 ${
							$page.url.pathname === '/admin' ? 'text-gray-400 ' : 'text-white'
						}`}
					>
						<DashboardIcon />
					</span>
					<span
						class={`ml-3 group-hover:text-gray-800 ${
							$page.url.pathname === '/admin' ? 'text-gray-800 ' : 'text-gray-100'
						}`}
					>
						Admin
					</span>
				</a>
			</li>
			<li class="group">
				<a
					href="/admin/products"
					class="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-100"
					class:bg-gray-100={$page.url.pathname === '/admin/products'}
				>
					<svg
						aria-hidden="true"
						class={`w-6 h-6 transition duration-75 group-hover:text-gray-400 ${
							$page.url.pathname === '/admin/products' ? 'text-gray-400 ' : 'text-white'
						}`}
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
							clip-rule="evenodd"
						/>
					</svg>
					<span
						class={`ml-3 group-hover:text-gray-800 ${
							$page.url.pathname === '/admin/products' ? 'text-gray-800' : 'text-gray-100'
						}`}
					>
						Products
					</span>
				</a>
			</li>
			<li class="group ml-4">
				<a
					href="/admin/products/categories"
					class="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-100"
					class:bg-gray-100={$page.url.pathname === '/admin/products/categories'}
				>
					<span
						class={`w-6 h-6 transition duration-75 group-hover:text-gray-400 ${
							$page.url.pathname === '/admin/products/categories' ? 'text-gray-400 ' : 'text-white'
						}`}
					>
						<BriefCaseIcon />
					</span>

					<span
						class={`ml-3 group-hover:text-gray-800 ${
							$page.url.pathname === '/admin/products/categories'
								? 'text-gray-800'
								: 'text-gray-100'
						}`}
					>
						Categories
					</span>
				</a>
			</li>
		</ul>
	</div>
</aside>
