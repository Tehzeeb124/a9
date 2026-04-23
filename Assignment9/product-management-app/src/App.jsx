import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
function App() {
  return (
    // 1. Router: Ye poore app ko raste (routes) dikhane ki taqat deta hai
    <Router>
      <div className="App">
        
        {/* 2. Navigation Bar: Ye buttons har page par nazar aayenge */}
        <nav style={{ padding: '20px', background: '#f4f4f4', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home (All Products)</Link>
          <Link to="/add">Add New Product</Link>
        </nav>

        {/* 3. Routes: Ye faisla karta hai ke screen par kaunsa page dikhana hai */}
        <Routes>
          {/* Jab address bar mein sirf "/" ho, toh Home dikhao */}
          <Route path="/" element={<Home />} />
          
          {/* Jab address bar mein "/add" ho, toh AddProduct dikhao */}
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;