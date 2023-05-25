import { Dispatch, SetStateAction } from "react"

export type ProductType = {
    image: {
        href: string,
        alt: string
    },
    _id: string,
    name: string,
    price: number,
    description: string,
    quantity: number,
    owner: {
        _id: string,
        name: string
    }
}

export type ProductProps = {
    product: ProductType,
   
   
}

