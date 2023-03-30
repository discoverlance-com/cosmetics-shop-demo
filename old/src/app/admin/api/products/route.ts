import { NextRequest, NextResponse } from 'next/server';

import prisma from '~/lib/prisma';
import { slugify } from '~/utils/string-helpers';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const formData = await request.formData();
  const file = formData.get('image');
  const { name, summary, description, price, quantity, category_id } = body;
  if (
    !name ||
    !summary ||
    !description ||
    !price ||
    !quantity ||
    !category_id
  ) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 422 },
    );
  }

  const slug = slugify(name);

  await prisma.product.create({
    data: {
      name,
      category_id,
      slug,
      summary,
      description,
      price,
      quantity,
    },
  });

  return NextResponse.json(null, { status: 201 });
}
