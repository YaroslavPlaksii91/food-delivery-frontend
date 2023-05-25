import { FC, useState } from 'react';
import Image from 'next/image';

import { useCart } from '@/services/context';

import { ProductProps } from './types';

const Product: FC<ProductProps> = ({ product }) => {
  const {
    image: { href, alt },
    name,
    description,
    price,
  } = product;

  const [added, setAdded] = useState(Boolean);

  const { setOrders, orders } = useCart();

  const handleClick = () => {
    setOrders([...orders, { ...product, quantity: 1 }]);
    setAdded(true);
  };

  return (
    <div className="flex flex-col items-center shadow-md pb-5 h-[550px] rounded-md overflow-hidden">
      <div className="w-full h-1/2 relative mb-4">
        <Image src={href} alt={alt} fill sizes="33vw" className="block" />
      </div>
      <div className="px-5 flex flex-col items-center justify-between flex-grow">
        <h3 className="text-xl font-medium mb-2">{name}</h3>
        <p className="mb-auto text-center">{description}</p>
        <p className="font-semibold mb-2">{price} UAH</p>
        <button
          type="button"
          className={`${
            added
              ? 'pointer-events-none bg-gray-600'
              : 'bg-green-500 hover:bg-green-700 focus:bg-green-700'
          } w-[150px] h-[50px] text-white  rounded  focus:outline-none`}
          onClick={handleClick}
        >
          {added ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;
