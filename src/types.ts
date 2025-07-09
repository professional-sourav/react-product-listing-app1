export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    image: string;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: string;
    dimensions: {
        length: number;
        width: number;
        depth: number;
    };
}

export type Products = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}