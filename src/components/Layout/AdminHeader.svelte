<script lang="ts">
	import AppButtonLink from '$components/UI/links/AppButtonLink.svelte';
</script>

<header class="fixed top-0 z-50 w-full bg-blue-700 border-b border-blue-200">
	<div class="px-34 py-3 lg:p-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-start">
				<button
					data-drawer-target="logo-sidebar"
					data-drawer-toggle="logo-sidebar"
					aria-controls="logo-sidebar"
					type="button"
					class="inline-flex items-center p-2 text-sm text-gray-100 rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
				>
					<span class="sr-only">Open sidebar</span>
					<svg
						class="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clip-rule="evenodd"
							fill-rule="evenodd"
							d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
						/>
					</svg>
				</button>
				<a href="/admin" class="flex ml-2 md:mr-24">
					<span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
						My Cosmetics
					</span>
				</a>
			</div>
			<div>
				<AppButtonLink href="/">Home</AppButtonLink>
			</div>
		</div>
	</div>
</header>
