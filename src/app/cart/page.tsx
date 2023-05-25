'use client';

import { FC } from 'react';

import OrderForm from '@/components/OrderForm';

const Cart: FC = () => {
  return (
    <section className="py-10">
      <OrderForm />
    </section>
  );
};

export default Cart;
