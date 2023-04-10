import type { Actions, PageServerLoad } from './$types';
import { fail, redirect, error } from '@sveltejs/kit';
import { Prisma } from '@prisma/client/edge';
import slugify from '@sindresorhus/slugify';
import prisma from '$lib/prisma';

export const load = (async ({ params }) => {
	const { slug } = params;
	const product = await prisma.product.findUnique({
		where: { slug },
		select: {
			name: true,
			summary: true,
			color: true,
			price: true,
			image: true,
			quantity: true,
			category: { select: { slug: true } }
		}
	});

	if (!product) {
		throw error(404, 'No Product exists with the specified name');
	}

	const categories = await prisma.category.findMany({ select: { name: true, slug: true } });

	return {
		categories,
		product: { ...product, price: product?.price.toString() }
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
		const name = data.get('name');
		const category = data.get('category');
		const price = data.get('price');
		const quantity = data.get('quantity');
		const color = data.get('color');
		const summary = data.get('summary');

		if (!name || !category || !price || !quantity || !summary) {
			return fail(422, {
				name,
				color,
				category,
				summary,
				price,
				quantity,
				missing: true,
				message: 'Validation Error. Please check and make sure you have a valid form data.'
			});
		}

		if (
			typeof name !== 'string' ||
			typeof price !== 'string' ||
			typeof category !== 'string' ||
			typeof quantity !== 'string' ||
			typeof summary !== 'string' ||
			(color && typeof color !== 'string')
		) {
			return fail(422, {
				name,
				color,
				category,
				summary,
				price,
				quantity,
				incorrect: true,
				message:
					'Validation Error. Could not validate data. Please ensure you have entered the required information.'
			});
		}

		try {
			// update data
			await prisma.product.update({
				where: {
					slug: params.slug
				},
				data: {
					name,
					price,
					quantity: Number(quantity),
					summary,
					color,
					slug: slugify(name, { lowercase: true, separator: '-' }),
					category: { connect: { slug: category } }
				}
			});
		} catch (error) {
			console.error(error);
			let message = 'Error saving data, try again later.';
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					message = 'Error saving data, a product with similar name might already exist';
				}
			}
			return fail(400, {
				name,
				color,
				category,
				summary,
				price,
				quantity,
				error: true,
				message
			});
		}
		throw redirect(303, '/admin/products');
	}
} satisfies Actions;
