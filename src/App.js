import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/Signup.js/Signup";
function App() {
  return (
    <div className="App">
      <Header logged={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
