import { Component } from "react";
import "./App.css";
// React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import DetailCharacterPage from "./pages/DetailCharacterPage/DetailCharacterPage"
import Category from "./pages/CategoryPage/CategoryPage";

fetch("https://naruto-api.fly.dev/api/v1/characters")
.then((response) => response.json())
.then((json) => console.log(json.results));

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <ItemListContainer greeting="A mundo naruto!" />
          </div>
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/detail/:id" element={<DetailCharacterPage />} />
            <Route path="/category/:categoryId" element={<Category />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
