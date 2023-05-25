import { FC } from 'react';

import ShopsList from '../ShopsList';

import { SidebarProps } from './types';

const Sidebar: FC<SidebarProps> = ({ shops, activeShop, setActiveShop }) => {
  return (
    <aside className="flex flex-col items-center pt-10">
      <h3 className="text-lg font-medium mb-4">Choose a shop</h3>
      <ShopsList
        shops={shops}
        activeShop={activeShop}
        setActiveShop={setActiveShop}
      />
    </aside>
  );
};

export default Sidebar;
