<script lang="ts">
	export let name: string;
	export let label: string;
	export let id: string | null = '';
	export let autocomplete: string | null | undefined = undefined;
	export let required: boolean = false;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let rows: undefined | number = 5;
	export let cols: undefined | number = undefined;
	export let helperText: string | undefined = undefined;
	export let defaultValue: string | null | undefined = '';
</script>

<div class="mb-6 space-y-2">
	<label for={id || name} class="block">{label} {required ? '*' : ''}</label>
	{#if helperText}
		<p class="mb-1 text-gray-400 text-sm">{helperText}</p>
	{/if}
	<textarea
		{required}
		value={defaultValue}
		{name}
		{maxlength}
		{minlength}
		{autocomplete}
		{rows}
		{cols}
		id={id || name}
		class="block focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 border-gray-400 focus:outline-none valid:border-blue-400 invalid:border-red-400 valid:focus:ring-blue-300 invalid:focus:ring-red-300 border-2 rounded w-full px-2 py-2 text-gray-700"
	/>
</div>
