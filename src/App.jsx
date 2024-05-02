import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Profile from "./pages/Profile";
import CreateGameAd from "./pages/CreateGameAd";
import Contact from "./pages/Contact";
import GameAds from "./pages/GameAds";
import GameAdPreview from "./pages/GameAdPreview";
import Shoppingcart from "./pages/Shoppingcart";
import RateUser from "./pages/RateUser";
import SellerProfile from "./pages/SellerProfile";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateGameAd />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gameads" element={<GameAds />} />
        <Route path="/gameadpreview" element={<GameAdPreview />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
        <Route path="/rateuser" element={<RateUser />} />
        <Route path="/sellerprofile" element={<SellerProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
