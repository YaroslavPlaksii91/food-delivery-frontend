'use client';

import { useState, useEffect } from 'react';

import Sidebar from '@/components/Sidebar';
import ShopSection from '@/components/ShopSection';

import { ProductType } from '@/components/Product/types';

import { getShops, getProducts } from '@/services/db';

const Home = () => {
  const [activeShop, setActiveShop] = useState('');
  const [products, setProducts] = useState([]);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const shopsData = await getShops();
      setShops(shopsData.data.shops);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (activeShop) {
        const data = await getProducts();

        const productsByCompany = data.data.products.filter(
          (product: ProductType) => product.owner.name === activeShop,
        );

        setProducts(productsByCompany);
      }
    };

    fetchProducts();
  }, [activeShop]);

  return (
    <>
      <main className="">
        <h1 className="sr-only">Food delivery</h1>
        <div className="grid grid-cols-[1fr,2fr]">
          <Sidebar
            shops={shops}
            activeShop={activeShop}
            setActiveShop={setActiveShop}
          />
          <ShopSection products={products} />
        </div>
      </main>
    </>
  );
};

export default Home;
