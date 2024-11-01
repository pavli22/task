export interface ProductInfo {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    rating: { rate: number, count: number }
}
