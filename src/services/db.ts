type OrderType = {
  name: string,
  quantity: number,
  price: number,
  shop: string
}

type OrderBodyType = {
  name: string,
  email: string,
  phone: string,
  address: string,
  total: number,
  order: OrderType[]
}

export const getShops = async () => {
  const res = await fetch('https://food-delivery-2k6e.onrender.com/api/shops');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getProducts = async () => {
  const res = await fetch(
    'https://food-delivery-2k6e.onrender.com/api/products',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const postOrders = async (body: OrderBodyType): Promise<void> => {
  await fetch('https://food-delivery-2k6e.onrender.com/api/orders', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const getOrders = async (phone: string) => {
  const res = await fetch(
    `https://food-delivery-2k6e.onrender.com/api/orders/${phone}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}