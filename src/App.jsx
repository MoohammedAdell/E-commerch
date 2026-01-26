import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 !bg-white">
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
  position="bottom-right"
  reverseOrder={false}
/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
