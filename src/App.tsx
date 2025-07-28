import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
// import AboutUs from './components/AboutUs';
// import Products from './components/Products';
// import Donation from './components/Donation';
// import Contact from './components/Contact';
import Layout from './components/Layout';
import GiaoSacVanKyPage from './components/GiaoSacVanKyPage';
import ProductsPage from './components/ProductsPage';
import CatalogPage
 from './components/CatalogPage';
import DonationPage from './components/Donation';
import AboutPage from './components/AboutUs';
import HowToPlayPage from './components/HowToPlayPage';
import GSVKPage from './components/GSVKPage';
import { CartProvider } from './components/cartContext';
import CartPage from './components/CartPage';
import CheckoutPage from './components/Checkout';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/san-pham/giao-sac-van-ky" element={<GiaoSacVanKyPage />} />
          <Route path="/san-pham" element={<ProductsPage />} />
          <Route path="/catalog/:page" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/quyen-gop" element={<DonationPage />} />
          <Route path='/gioi-thieu' element={<AboutPage />} />
          <Route path='/cach-choi' element={<HowToPlayPage />} />
          <Route path='/cach-choi/giao-sac-van-ky' element={<GSVKPage />} />
          <Route path='/gio-hang' element={<CartPage />} />
          <Route path='/thanh-toan' element={<CheckoutPage />} />
          {/* <Route path="/gioi-thieu" element={<AboutUs />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/quyen-gop" element={<Donation />} />
          <Route path="/lien-he" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;