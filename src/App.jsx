import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

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
import Faq from "./pages/Faq";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./components/PrivateRoute";
import GameAdDetails from "./pages/GameAdDetails";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gameads" element={<GameAds />} />
          <Route path="/gameads/:id" element={<GameAdDetails />} />
          <Route path="/gameadpreview" element={<GameAdPreview />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          <Route path="/rateuser" element={<RateUser />} />
          <Route path="/sellerprofile" element={<SellerProfile />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/creategamead"
            element={
              <PrivateRoute>
                <CreateGameAd />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
