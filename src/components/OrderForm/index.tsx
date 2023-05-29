import { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useCart } from '@/app/context/store';
import { postOrders } from '@/services/db';

import InputField from '../InputField';
import Order from '../Order';

import { FormData } from './types';

const OrderForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { orders } = useCart();

  const onSubmit = (data: FormData) => {
    const order = orders.map((order) => {
      return {
        name: order.name,
        quantity: order.quantity,
        price: order.price,
        shop: order.owner.name,
      };
    });
    const total = order.reduce((acc, el) => acc + el.price * el.quantity, 0);
    const body = { ...data, order, total };

    postOrders(body);

    toast.success('Your order has been accepted');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex">
      <div className="w-full px-20">
        <InputField
          label="Name:"
          type="text"
          name="name"
          register={register('name', {
            required: 'Required field',
            minLength: {
              value: 2,
              message: 'Name must contain at least 2 letters',
            },
          })}
          errors={errors}
        />

        <InputField
          label="Email:"
          type="email"
          name="email"
          register={register('email', {
            required: 'Required field',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Enter proper email',
            },
          })}
          errors={errors}
        />

        <InputField
          label="Phone"
          type="text"
          name="phone"
          register={register('phone', {
            required: 'Required field',
            pattern: {
              value: /^\+?[0-9]{10,12}$/,
              message: 'Phone must contain 10-12 numbers',
            },
          })}
          errors={errors}
        />

        <InputField
          label="Address"
          type="text"
          name="address"
          register={register('address', {
            required: 'Required field',
            minLength: {
              value: 8,
              message: 'Your address should be longer',
            },
          })}
          errors={errors}
        />
      </div>

      <div className="w-full flex flex-col justify-between">
        <Order />

        <button
          type="submit"
          className="block mx-auto bg-blue-500 text-white font-medium hover:bg-blue-200 focus:bg-blue-200 hover:text-blue-500 focus:text-blue-500 focus:outline-none transition-colors duration-300 px-4 py-2 rounded hover{...errors.checkbox ? 'bg-blue-600' : 'bg-blue-500'}"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
