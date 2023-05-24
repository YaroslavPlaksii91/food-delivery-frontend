import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ShopSection from '@/components/ShopSection';

import { ProductType } from '@/components/Product/types';

const getShops = async () => {
  const res = await fetch('https://food-delivery-2k6e.onrender.com/api/shops');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const getProducts = async () => {
  const res = await fetch(
    'https://food-delivery-2k6e.onrender.com/api/products',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Home = async () => {
  const shopsData = await getShops();
  const shops = shopsData.data.shops;

  const productsData = await getProducts();
  const products = productsData.data.products.filter(
    (product: ProductType) => product.owner.name === 'PizzaCompany',
  );

  return (
    <>
      <Header />
      <main className="">
        <h1 className="sr-only">Food delivery</h1>
        <div className="grid grid-cols-[1fr,2fr]">
          <Sidebar shops={shops} />
          <ShopSection products={products} />
        </div>
      </main>
    </>
  );
};

export default Home;
