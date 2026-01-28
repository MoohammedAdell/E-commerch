import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import SearchResults from "./pages/search/SearchResults";
import Favorites from "./pages/favorites/Favorites";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 !bg-white">
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
