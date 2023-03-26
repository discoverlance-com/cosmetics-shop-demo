import prisma from '~/lib/prisma';

export const getAllCategories = async () => {
  return await prisma.category.findMany({
    select: {
      name: true,
      slug: true,
      _count: { select: { products: true } },
    },
  });
};

export const getAllCategoriesWithProducts = async () => {
  return await prisma.category.findMany({
    select: {
      name: true,
      slug: true,
      _count: { select: { products: true } },
      products: {
        select: {
          name: true,
          price: true,
          quantity: true,
          slug: true,
          color: true,
          image: true,
          summary: true,
        },
      },
    },
  });
};
