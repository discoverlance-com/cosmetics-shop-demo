import type { PageServerLoad } from './$types';

import prisma from '$lib/prisma';
import { decryptData, encryptData } from '$lib/hash';

export const load = (async ({ url }) => {
	const query = url.searchParams;
	const next = query.get('next');

	let take = 5;
	let cursor = '';

	if (next) {
		take = Number(decryptData(next)) + 5;
		cursor = encryptData(take);
	} else {
		cursor = encryptData(take);
	}

	const results = await prisma.$transaction([
		prisma.product.count(),
		prisma.product.findMany({
			take: take,
			select: {
				name: true,
				price: true,
				quantity: true,
				slug: true,
				image: true,
				summary: true
			},
			orderBy: {
				name: 'asc'
			}
		})
	]);

	return {
		products: results[1].map((product) => ({ ...product, price: product.price.toFixed(2) })),
		cursor,
		isDone: take >= results[0]
	};
}) satisfies PageServerLoad;
