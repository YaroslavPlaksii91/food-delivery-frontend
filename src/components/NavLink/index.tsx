import { FC } from 'react';
import Link from 'next/link';

import { NavLinkProps } from './types';

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-block hover:text-yellow-600 focus:text-yellow-600 focus:outline-none transition-colors"
    >
      {children}
    </Link>
  );
};

export default NavLink;
