import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Pages/Home/Home.jsx";

import "./index.css";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup/LoginPopup.jsx";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
