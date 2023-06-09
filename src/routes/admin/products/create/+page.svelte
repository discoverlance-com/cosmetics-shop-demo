<script lang="ts">
	import AppButton from '$components/UI/button/AppButton.svelte';
	import AppInput from '$components/UI/form/AppInput.svelte';
	import AppSelectInput from '$components/UI/form/AppSelectInput.svelte';
	import AppTextAreaInput from '$components/UI/form/AppTextAreaInput.svelte';

	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
	let creating = false;
</script>

<svelte:head>
	<title>Create Product - My Cosmetics</title>
</svelte:head>

<div id="form-container">
	<div class="flex justify-between items-center mb-2">
		<h1 class="font-bold text-4xl">Create Product</h1>
	</div>

	<p>Fill in the details to create a product</p>

	<div class="mt-8 max-w-xl">
		{#if form?.error || form?.missing || form?.incorrect}
			<div class="p-4 text-sm text-red-800 bg-blue-50 rounded mb-4" role="alert">
				<p>{form?.message}</p>
			</div>
		{/if}

		<form
			method="POST"
			use:enhance={() => {
				creating = true;

				return async ({ update, result, form }) => {
					await update();
					creating = false;
					if (result.type === 'failure') {
						console.log(result?.data);
						document.getElementById('form-container')?.scrollIntoView();
					}
				};
			}}
		>
			<!-- FORM missing: image, description -->
			<AppInput
				name="name"
				id="name"
				label="Name"
				required
				defaultValue={form?.name}
				disabled={creating}
			/>

			<AppInput
				name="quantity"
				type="number"
				id="quantity"
				label="Quantity"
				required
				min={1}
				defaultValue={form?.quantity}
				disabled={creating}
			/>
			<AppInput
				name="price"
				step="0.01"
				type="number"
				id="price"
				label="Price (USD)"
				required
				min={1}
				defaultValue={form?.price}
				disabled={creating}
			/>
			<AppInput
				name="color"
				type="color"
				id="color"
				label="Color"
				defaultValue={form?.color}
				disabled={creating}
			/>

			<AppSelectInput
				name="category"
				id="category"
				label="Product category"
				required
				disabled={creating}
			>
				<option value=""> --- Select an option --- </option>
				{#each data.categories as category}
					{#if form?.category === category.slug}
						<option value={category.slug} selected>{category.name}</option>
					{:else}
						<option value={category.slug}>{category.name}</option>
					{/if}
				{/each}
			</AppSelectInput>

			<AppTextAreaInput
				name="summary"
				id="summary"
				label="Summary"
				required
				maxlength={165}
				helperText="Give simple description of the product"
				defaultValue={form?.summary}
				disabled={creating}
			/>

			<div class="mt-6">
				<AppButton type="submit" variant="inverted" disabled={creating}
					>{creating ? 'Submitting' : 'Submit'}</AppButton
				>
			</div>
		</form>
	</div>
</div>
