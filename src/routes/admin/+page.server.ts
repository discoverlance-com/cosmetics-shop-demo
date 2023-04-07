import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

const getProductsChartData = async () => {
	return await prisma.product.findMany({
		select: {
			name: true,
			quantity: true
		}
	});
};

export const load = (async () => {
	const [products, productsCount] = await Promise.all([
		await getProductsChartData(),
		await prisma.product.count()
	]);
	return {
		productsCount,
		products
	};
}) satisfies PageServerLoad;
