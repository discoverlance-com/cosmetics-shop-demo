<script lang="ts">
	export let name: string;
	export let label: string;
	export let type:
		| 'text'
		| 'number'
		| 'color'
		| 'tel'
		| 'password'
		| 'url'
		| 'date'
		| 'email'
		| 'hidden'
		| 'submit' = 'text';
	export let id: string | null = '';
	export let autocomplete: string | null | undefined = undefined;
	export let required: boolean = false;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let step: string | undefined = undefined;
	export let pattern: string | undefined = undefined;
	export let helperText: string | undefined = undefined;
	export let defaultValue: string | null | undefined | FormDataEntryValue = '';
</script>

<div class="mb-6 space-y-2">
	<label for={id || name} class="block">{label} {required ? '*' : ''}</label>
	<input
		{required}
		{pattern}
		value={defaultValue}
		{step}
		{type}
		{name}
		{min}
		{max}
		{maxlength}
		{minlength}
		{autocomplete}
		id={id || name}
		class="h-12 block focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 border-gray-400 focus:outline-none valid:border-blue-400 invalid:border-red-400 valid:focus:ring-blue-300 invalid:focus:ring-red-300 border-2 rounded w-full px-4 py-2 text-gray-700"
	/>
	{#if helperText}
		<p class="mb-1 text-gray-400 text-sm">{helperText}</p>
	{/if}
</div>
