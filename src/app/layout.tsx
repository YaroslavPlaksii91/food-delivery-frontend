import './globals.css';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { ContextProvider } from './context/store';

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
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <ContextProvider>{children}</ContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
