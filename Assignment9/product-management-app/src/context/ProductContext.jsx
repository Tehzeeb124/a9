import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Fetch Products from DummyJSON
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  // 2. Delete Function
  const deleteProduct = (id) => {
    if (window.confirm("Kiya aap waqai delete karna chahte hain?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };
const addProduct = (newProduct) => {
  // Hum naye product ko aik id dete hain aur purani list ke shuru mein jor dete hain
  setProducts([{ ...newProduct, id: Date.now() }, ...products]);
};
const updateProduct = (id, updatedData) => {
  setProducts(products.map(p => (p.id === parseInt(id) ? { ...p, ...updatedData } : p)));
};

// Provider ki value mein isay shamil karna mat bhooliyega:
// value={{ ..., updateProduct }}
  return (
    <ProductContext.Provider value={{ products, loading, deleteProduct, searchTerm, setSearchTerm,addProduct,updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};