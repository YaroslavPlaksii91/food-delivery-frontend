import { FC } from 'react';

import ShopsList from '../ShopsList';

import { ShopsProps } from '../ShopsList/types';

const Sidebar: FC<ShopsProps> = ({ shops }) => {
  return (
    <aside>
      <h3 className="text-lg font-medium mb-4">Shops:</h3>
      <ShopsList shops={shops} />
    </aside>
  );
};

export default Sidebar;
