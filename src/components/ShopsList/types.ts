type ShopType = {
    _id: string,
    name: string
}

export type ShopsListProps = {
    shops: ShopType[],
    activeShop: string,
    setActiveShop: (shopName: string) => void
}