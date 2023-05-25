import { FC, useState } from 'react';

import Shop from '../Shop';

import { ShopsListProps } from './types';

const ShopsList: FC<ShopsListProps> = ({
  shops,
  activeShop,
  setActiveShop,
}) => {
  return (
    <ul className="space-y-2">
      {shops.map(({ _id, name }) => (
        <li key={_id}>
          <Shop name={name} onClick={setActiveShop} active={activeShop} />
        </li>
      ))}
    </ul>
  );
};

export default ShopsList;
