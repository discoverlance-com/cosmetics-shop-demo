import prisma from '~/lib/prisma';

export const getAllProducts = async () => {
  return await prisma.product.findMany({
    select: {
      name: true,
      price: true,
      quantity: true,
      slug: true,
      color: true,
      image: true,
      summary: true,
      description: true,
    },
  });
};

export const getAllProductsWithCategory = async () => {
  return await prisma.product.findMany({
    select: {
      name: true,
      price: true,
      quantity: true,
      slug: true,
      color: true,
      image: true,
      summary: true,
      description: true,
      category: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });
};
