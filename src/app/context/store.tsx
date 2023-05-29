'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

import { ProductType } from '@/components/Product/types';

interface ContextProps {
  orders: ProductType[];
  setOrders: Dispatch<SetStateAction<ProductType[]>>;
}

export const CartContext = createContext<ContextProps>({
  orders: [],
  setOrders: (): ProductType[] => [],
});

export const ContextProvider = ({ children }: any) => {
  const [orders, setOrders] = useState<[] | ProductType[]>([]);

  return (
    <CartContext.Provider value={{ orders, setOrders }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
