import { FC } from 'react';

import NavLink from '../NavLink';

const Navigation: FC = () => {
  return (
    <nav className="flex justify-center gap-4">
      <NavLink href="/">Shop</NavLink>
      <NavLink href="/cart">Shopping Cart</NavLink>
      <NavLink href="/history">History</NavLink>
      <NavLink href="coupons">Coupons</NavLink>
    </nav>
  );
};

export default Navigation;
