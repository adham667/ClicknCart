import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/Signup.js/Signup";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
function App() {
  return (
    <div className="App">
      <Header logged={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
