import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import { slugify } from '../../utils/string-helpers';

const generateData = () => {
  const categories = [
    ...Array(10)
      .fill(null)
      .map((_) => {
        const name = faker.helpers.unique(faker.commerce.department);
        return {
          name,
          slug: slugify(name),
          products: [
            ...Array(2)
              .fill(null)
              .map((_) => {
                const productName = faker.helpers.unique(
                  faker.commerce.productName,
                );
                return {
                  name: productName,
                  slug: slugify(productName),
                  color: faker.helpers.unique(faker.color.rgb),
                  image: faker.image.fashion(1280, 300, true),
                  quantity: Number(faker.random.numeric()),
                  price: faker.commerce.price(10, 1000),
                  summary: faker.commerce.productAdjective(),
                  description: faker.commerce.productDescription(),
                };
              }),
          ],
        };
      }),
  ];

  try {
    const dir = path.resolve(__dirname, './products.json');
    fs.writeFileSync(dir, JSON.stringify(categories, null, 2), {
      encoding: 'utf-8',
    });
  } catch (error) {
    console.log(error);
  }
};
generateData();
