import { Component } from "react";
import "./App.css";
// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCartProvider from "./context/ShoppingCartContext";

// Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import DetailCharacterPage from "./pages/DetailCharacterPage/DetailCharacterPage"
import Category from "./pages/CategoryPage/CategoryPage";
import CartPage from "../src/pages/CartPage/CartPage"

class App extends Component {
  render() {
    return (
      <ShoppingCartProvider>
      <Router>
        <div>
          <NavBar />
          <div>
            <ItemListContainer greeting="portrait world!" />
          </div>
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/detail/:id" element={<DetailCharacterPage />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
      </ShoppingCartProvider>

    );
  }
}

export default App;
