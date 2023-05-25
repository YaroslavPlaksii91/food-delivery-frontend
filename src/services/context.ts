import { createContext, useContext } from 'react';

import { ProductType } from '@/components/Product/types';

export interface CartContextType {
  orders: ProductType[];
  setOrders: (orders: ProductType[]) => void;
}

export const CartContext = createContext<CartContextType>({
  orders: [],
  setOrders: () => {},
});

export const useCart = (): CartContextType => useContext(CartContext);




