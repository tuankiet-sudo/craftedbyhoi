import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
// import AboutUs from './components/AboutUs';
// import Products from './components/Products';
// import Donation from './components/Donation';
// import Contact from './components/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/gioi-thieu" element={<AboutUs />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/quyen-gop" element={<Donation />} />
          <Route path="/lien-he" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;