'use client';

import { FC, useState } from 'react';

import Shop from '../Shop';

import { ShopsProps } from './types';

const ShopsList: FC<ShopsProps> = ({ shops }) => {
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (shopName: string) => {
    setActiveButton(shopName);
  };

  return (
    <ul className="space-y-2">
      {shops.map(({ _id, name }) => (
        <li key={_id}>
          <Shop name={name} onClick={handleClick} active={activeButton} />
        </li>
      ))}
    </ul>
  );
};

export default ShopsList;
