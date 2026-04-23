import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useContext(ProductContext);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  // Purana data load karne ke liye
  useEffect(() => {
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [id, products]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(id, { title, price });
    navigate('/'); // Wapas home par bhejna
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br /><br />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <br /><br />
        <button type="submit" style={{ background: 'orange', color: 'white' }}>Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;