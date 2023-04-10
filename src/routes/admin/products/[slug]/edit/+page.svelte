<script lang="ts">
	import AppButton from '$components/UI/button/AppButton.svelte';
	import AppInput from '$components/UI/form/AppInput.svelte';
	import AppSelectInput from '$components/UI/form/AppSelectInput.svelte';
	import AppTextAreaInput from '$components/UI/form/AppTextAreaInput.svelte';

	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
	let updating = false;
</script>

<svelte:head>
	<title>Edit Product - My Cosmetics</title>
</svelte:head>

<div>
	<div class="flex justify-between items-center mb-2">
		<h1 class="font-bold text-4xl">Edit Product</h1>
	</div>

	<p>Update product</p>

	<div class="mt-8 max-w-xl">
		{#if form?.error || form?.missing || form?.incorrect}
			<div class="p-4 text-sm text-red-800 bg-blue-50 rounded mb-4" role="alert">
				<p>{form?.message}</p>
			</div>
		{/if}

		<form
			method="POST"
			use:enhance={() => {
				updating = true;

				return async ({ update, result }) => {
					await update();
					updating = false;

					if (result.type === 'failure') {
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
				defaultValue={form?.name || data.product.name}
				disabled={updating}
			/>

			<AppInput
				name="quantity"
				type="number"
				id="quantity"
				label="Quantity"
				required
				min={1}
				defaultValue={form?.quantity || data.product.quantity}
				disabled={updating}
			/>
			<AppInput
				name="price"
				step="0.01"
				type="number"
				id="price"
				label="Price (USD)"
				required
				min={1}
				defaultValue={form?.price || data.product.price}
				disabled={updating}
			/>
			<AppInput
				name="color"
				type="color"
				id="color"
				label="Color"
				defaultValue={form?.color || data.product.color}
				disabled={updating}
			/>

			<AppSelectInput
				name="category"
				id="category"
				label="Product category"
				required
				disabled={updating}
			>
				<option value=""> --- Select an option --- </option>
				{#each data.categories as category}
					{#if form?.category === category.slug || category.slug === data.product.category?.slug}
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
				defaultValue={form?.summary || data.product.summary}
				disabled={updating}
			/>

			<div class="mt-6">
				<AppButton type="submit" variant="inverted" disabled={updating}>
					{updating ? 'Submitting...' : 'Submit'}
				</AppButton>
			</div>
		</form>
	</div>
</div>
