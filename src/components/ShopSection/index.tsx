import { FC } from 'react';

import ProductsList from '../ProductsList';

import { ShopSectionProps } from './types';

const ShopSection: FC<ShopSectionProps> = ({ products }) => {
  return (
    <section className="py-10 px-10">
      <h2 className="sr-only">Products</h2>
      <ProductsList products={products} />
    </section>
  );
};

export default ShopSection;
