import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
const slugify = (...args: (string | number)[]): string => {
	const value = args.join(' ');
	return value
		.normalize('NFD') // split an accented letter in the base letter and the acent
		.replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
		.replace(/\s+/g, '-'); // separator
};

const generateData = () => {
	const categories = [
		...Array(10)
			.fill(null)
			.map(() => {
				const name = faker.helpers.unique(faker.commerce.department);
				return {
					name,
					slug: slugify(name),
					products: [
						...Array(2)
							.fill(null)
							.map(() => {
								const productName = faker.helpers.unique(faker.commerce.productName);
								return {
									name: productName,
									slug: slugify(productName),
									color: faker.helpers.unique(faker.color.rgb),
									image: faker.image.fashion(1280, 300, true),
									quantity: Number(faker.random.numeric()),
									price: faker.commerce.price(10, 1000),
									summary: faker.commerce.productAdjective(),
									description: faker.commerce.productDescription()
								};
							})
					]
				};
			})
	];

	try {
		const dir = path.resolve(process.cwd(), 'prisma/seed-data/products.json');
		fs.writeFileSync(dir, JSON.stringify(categories, null, 2), {
			encoding: 'utf-8'
		});
	} catch (error) {
		console.log(error);
	}
};
generateData();
