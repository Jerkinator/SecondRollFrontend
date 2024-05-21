import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Profile from "./pages/Profile";
import CreateGameAd from "./pages/CreateGameAd";
import Shoppingcart from "./pages/Shoppingcart";
import RateUser from "./pages/RateUser";
import SellerProfile from "./pages/SellerProfile";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./components/PrivateRoute";
import GameAdDetails from "./pages/GameAdDetails";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route path="/gameads/:id" element={<GameAdDetails />} />
          <Route
            path="/shoppingcart"
            element={
              <PrivateRoute>
                <Shoppingcart />
              </PrivateRoute>
            }
          />
          <Route
            path="/rateuser"
            element={
              <PrivateRoute>
                <RateUser />
              </PrivateRoute>
            }
          />
          <Route
            path="/sellerprofile"
            element={
              <PrivateRoute>
                <SellerProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
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

//       <Route path="/gameads" element={<GameAds />} />
//   <Searchbar />
