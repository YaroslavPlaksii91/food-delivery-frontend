import { FC } from 'react';
import Image from 'next/image';

import { ProductProps } from './types';

const Product: FC<ProductProps> = ({ product }) => {
  const {
    image: { href, alt },
    name,
    description,
    price,
  } = product;

  return (
    <div className="">
      <Image src={href} alt={alt} width={150} height={150} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button type="button">Add to Cart</button>
    </div>
  );
};

export default Product;
