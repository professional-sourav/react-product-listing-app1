export const fetchProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=100');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
}