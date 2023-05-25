import { FC } from 'react';

import Product from '../Product';

import { ProductsListProps } from './types';

const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <ul className="grid grid-cols-2 gap-10">
      {products.map((product) => {
        return (
          <li key={product._id}>
            <Product product={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
