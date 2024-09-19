import { useState, useEffect } from 'react';
// import axios from 'axios';
import { products as dataProducts } from "../data";

const useProducts = (categoryId?: string) => {
    const [products, setProducts] = useState<typeof dataProducts>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                // const response = await axios.get('/api/products', {
                //     params: { category: categoryId },
                // });
                // setProducts(response.data);

                setProducts(dataProducts);

            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return { products, loading, error };
};

export default useProducts;
