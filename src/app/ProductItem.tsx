import { LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';
import type { Variants } from 'framer-motion';
import type { Product } from '@prisma/client';

import AppModal from '~/components/UI/modal/AppModal';

const cardVariants: Variants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

type ProductData = Pick<Product, 'name' | 'image' | 'summary' | 'price'>;

interface Props extends ProductData {}

const ProductItem = (props: Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <m.div variants={cardVariants} className="border-blue-600 border-8 p-4">
          <h3 className="font-bold text-3xl">{props.name}</h3>
          <div>
            {props.image && (
              <Image
                src={props.image}
                alt={`${props.name} product`}
                className="w-full object-cover object-center mt-8 h-64 aspect-auto"
                width={1280}
                height={256}
              />
            )}
          </div>
          <p className="border p-2 border-blue-500 mt-4">
            <span className="block">{props.summary}</span>
            <span className="block font-bold text-xl">
              US$ {props.price.toString()}{' '}
            </span>
          </p>

          <div className="mt-4">
            <AppModal title={`Order ${props.name}`} trigger="Order">
              <p>Thanks for ordering</p>
            </AppModal>
          </div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default ProductItem;
