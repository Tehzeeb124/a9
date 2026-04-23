import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom'; // 1. Ye import karna zaroori hai

const Home = () => {
  const { products, loading, deleteProduct, searchTerm, setSearchTerm } = useContext(ProductContext);

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <h2>Loading... Products aa rahe hain...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Management</h1>
      <input 
        type="text" 
        placeholder="Search product..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {filteredProducts.map(p => (
          <div key={p.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <img src={p.thumbnail} alt={p.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{p.title}</h3>
            <p>Price: ${p.price}</p>

            {/* 2. Delete button ke sath ye Edit ka link hai */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => deleteProduct(p.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                Delete
              </button>
<Link to={`/edit/${p.id}`} style={{ background: 'orange', color: 'white', textDecoration: 'none', padding: '5px 10px', borderRadius: '4px' }}>
  Edit
</Link>
             
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;