import { FC, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';

import { useCart } from '@/app/context/store';

const Order: FC = () => {
  const { orders, setOrders } = useCart();

  const [values, setValues] = useState<number[]>(orders.map(() => 1));

  const handleChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    const newValues = [...values];
    newValues[index] = parseInt(e.target.value);
    setValues(newValues);

    const updatedOrders = [...orders];
    updatedOrders[index].quantity = parseInt(e.target.value);
    setOrders(updatedOrders);
  };

  const handleRemoveItem = (index: number): void => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);

    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  const total = orders.reduce((accumulator, order, index) => {
    return accumulator + order.price * values[index];
  }, 0);

  return (
    <div className="px-10">
      <ul className="space-y-6 mb-6">
        {orders.map((order, index) => {
          return (
            <li key={order._id}>
              <div className="flex relative">
                <div className="relative w-1/2 h-40">
                  <Image
                    src={order.image.href}
                    alt={order.image.alt}
                    fill
                    sizes="30vw"
                  />
                </div>
                <div className="w-1/2 px-5 flex flex-col items-center">
                  <h3 className="text-2xl font-bold mb-4">{order.name}</h3>
                  <p className="mb-4 text-xl font-semibold">
                    Price: {order.price} UAH
                  </p>
                  <label>
                    <input
                      type="number"
                      name="quantity"
                      value={values[index]}
                      min={1}
                      onChange={(e) => handleChange(index, e)}
                      className="bg-green-500 p-2 font-bold text-center"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  className="absolute top-1 right-5 rounded-full w-8 h-8 border-2 border-gray-500 hover:border-green-500 focus:border-green-500 focus:outline-none  flex items-center justify-center transition-colors"
                  onClick={() => handleRemoveItem(index)}
                  aria-label="Delete product from cart"
                >
                  <MdClose size={20} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="text-xl font-bold text-right mb-6">
        Total price: {total} UAH
      </p>
    </div>
  );
};

export default Order;
