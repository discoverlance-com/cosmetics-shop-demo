<script lang="ts">
	export let variant = 'default';
</script>

<button
	on:click
	class="px-4 py-2 rounded shadow shadow-white/50 transition-all duration-300 hover:translate-y-1 hover:rounded-none focus:ring-4 focus:ring-blue-200 outline-none focus:outline-none"
	class:bg-blue-700={variant === 'inverted'}
	class:text-gray-100={variant === 'inverted'}
	class:bg-white={variant === 'default'}
	class:text-gray-700={variant === 'default'}
>
	<slot />
</button>
