'use client';

import './globals.css';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { CartContext } from '@/services/context';
import { ProductType } from '@/components/Product/types';

import Header from '@/components/Header';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Food Delivery - Delicious Meals Delivered to Your Doorstep',
  description:
    'Order delicious meals from top restaurants and get them delivered to your doorstep. Enjoy a wide variety of cuisines with our convenient food delivery service.',
  keywords:
    'food delivery, online food ordering, restaurant delivery, meal delivery, order food online',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [orders, setOrders] = useState<ProductType[]>([]);

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <CartContext.Provider value={{ orders, setOrders }}>
          {children}
        </CartContext.Provider>
        <Toaster />
      </body>
    </html>
  );
}
