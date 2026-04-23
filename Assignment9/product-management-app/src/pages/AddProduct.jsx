import { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // 1. Nayi state image URL ke liye
  
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 2. addProduct mein ab hum fix image ke bajaye state wali image bhejenge
    addProduct({ 
      title, 
      price, 
      thumbnail: imageUrl || 'https://via.placeholder.com/150' // Agar khali chora toh placeholder aa jaye
    });
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input type="text" placeholder="Product Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        
        {/* 3. Image URL ka naya input field */}
        <input 
          type="text" 
          placeholder="Image URL (e.g. https://xyz.com/img.jpg)" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
        />
        
        <button type="submit" style={{ background: 'green', color: 'white', padding: '10px' }}>Save Product</button>
      </form>
    </div>
  );
};

export default AddProduct;