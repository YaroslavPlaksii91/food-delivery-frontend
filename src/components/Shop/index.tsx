import { FC } from 'react';

import { ShopProps } from './types';

const Shop: FC<ShopProps> = ({ name, onClick, active }) => {
  return (
    <div>
      <button
        type="button"
        className={`${
          active === name
            ? 'bg-green-600'
            : active === ''
            ? 'bg-yellow-600 hover:bg-yellow-800 focus:bg-yellow-800'
            : 'bg-gray-600 pointer-events-none'
        } w-40 h-12 text-white rounded focus:outline-none`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default Shop;
