import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};

const getCategories = async (next: string, perPage: string) => {
	return await prisma.category.findMany({
		skip: Number(next),
		take: Number(perPage),
		orderBy: {
			name: 'asc'
		},
		select: {
			name: true,
			slug: true,
			_count: {
				select: { products: true }
			}
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
		await getCategories(next, perPage),
		await prisma.category.count()
	]);

	return {
		categories: data,
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
