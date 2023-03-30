import { PrismaClient } from '@prisma/client';
import products from './seed-data/products.json';
const prisma = new PrismaClient();

async function main() {
  products.forEach(async (product) => {
    await prisma.category.create({
      data: {
        name: product.name,
        slug: product.slug,
        products: {
          createMany: {
            data: product.products,
          },
        },
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
