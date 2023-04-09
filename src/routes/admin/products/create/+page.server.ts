import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { Prisma } from '@prisma/client/edge';
import slugify from '@sindresorhus/slugify';
import prisma from '$lib/prisma';

export const load = (async () => {
	const categories = await prisma.category.findMany({ select: { name: true, slug: true } });
	return {
		categories
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
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
				message: 'Validation Error'
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
				message: 'Validation Error'
			});
		}

		try {
			// save data
			await prisma.product.create({
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
