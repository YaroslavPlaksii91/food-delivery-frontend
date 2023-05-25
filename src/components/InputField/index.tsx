import { FC } from 'react';

import { InputFieldProps } from './types';

const InputField: FC<InputFieldProps> = ({
  label,
  type,
  name,
  register,
  errors,
}) => {
  return (
    <div className="mb-5 relative">
      <label
        htmlFor={name}
        className="text-black block mb-1 after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        className={`${
          errors[name]
            ? 'focus:border-red-500 focus:ring-red-500 border-red-500 text-red-500'
            : 'focus:border-sky-500  focus:ring-sky-500'
        } block w-full px-3 py-2 border border-slate-500 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1`}
        {...register}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm absolute">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default InputField;
