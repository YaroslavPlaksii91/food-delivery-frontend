import { UseFormRegisterReturn, FieldErrors  } from "react-hook-form";
import { FormData } from "../OrderForm/types";

export type InputFieldProps = {
  label: string;
  type: string;
  name: keyof FormData;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
  
};