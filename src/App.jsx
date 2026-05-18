import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CategoryDetail from './pages/CategoryDetail';
import Production from './pages/Production';
import Delivery from './pages/Delivery';
import About from './pages/About';
import News from './pages/News';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:categoryId" element={<CategoryDetail />} />
          <Route path="/production" element={<Production />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
