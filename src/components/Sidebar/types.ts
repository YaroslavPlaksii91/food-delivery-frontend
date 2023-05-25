export type SidebarProps = {
    shops: {
        name: string,
        _id: string
    }[],
    activeShop: string,
    setActiveShop: (shopName: string) => void;
}