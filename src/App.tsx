import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { CategoryDetail } from './pages/CategoryDetail';
import { OutfitDetail } from './pages/OutfitDetail';
import { ProductDetail } from './pages/ProductDetail';
import { AIStyling } from './pages/AIStyling';
import { Pricing } from './pages/Pricing';
import { MyWardrobe } from './pages/MyWardrobe';
import { About } from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/outfit/:categoryId/:outfitId" element={<OutfitDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/ai-stylist" element={<AIStyling />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/my-wardrobe" element={<MyWardrobe />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

