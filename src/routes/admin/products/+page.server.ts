import type { PageServerLoad, Actions } from './$types';
import prisma from '$lib/prisma';
import type { Config } from '@sveltejs/adapter-vercel';
import { error, redirect } from '@sveltejs/kit';

export const config: Config = {
	runtime: 'edge'
};

export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const slug = data.get('product');

		if (!slug || typeof slug !== 'string') {
			throw error(404, 'Product not found');
		}

		const product = await prisma.product.findUnique({ where: { slug } });

		if (!product) {
			throw error(404, 'Product not found');
		}

		await prisma.product.delete({ where: { slug } });
		throw redirect(303, '/admin/products');
	}
} as Actions;

const getProducts = async (next: string, perPage: string) => {
	return await prisma.product.findMany({
		skip: Number(next),
		take: Number(perPage),
		orderBy: {
			name: 'asc'
		},
		select: {
			name: true,
			quantity: true,
			category: {
				select: {
					name: true
				}
			},
			image: true,
			summary: true,
			price: true,
			slug: true
		}
	});
};

export const load = (async ({ url }) => {
	const searchParams = new URL(url).searchParams;

	let perPage = searchParams.get('perPage');
	let next = searchParams.get('next');

	if (perPage === null) {
		perPage = '10';
	}
	if (next === null) {
		next = '0';
	}
	if (isNaN(Number(perPage))) {
		perPage = '10';
	}
	if (isNaN(Number(next))) {
		next = '0';
	}
	if (Number(next) && Number(next) < 0) {
		next = '0';
	}

	const [data, count] = await Promise.all([
		await getProducts(next, perPage),
		await prisma.product.count()
	]);

	return {
		products: data.map((product) => ({ ...product, price: product.price.toString() })),
		nextPage: Number(next) + Number(perPage) >= count ? null : Number(next) + Number(perPage),
		previousPage:
			Number(next) > 0
				? Number(next) - Number(perPage) < 0
					? 0
					: Number(next) - Number(perPage)
				: null,
		total: count,
		currentPage: `${next} - ${
			Number(next) + Number(perPage) >= count ? count : Number(next) + Number(perPage)
		}`
	};
}) satisfies PageServerLoad;
