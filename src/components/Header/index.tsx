import { FC } from 'react';

import Navigation from '../Navigation';

const Header: FC = () => {
  return (
    <header className="bg-green-900 text-white py-4">
      <Navigation />
    </header>
  );
};

export default Header;
