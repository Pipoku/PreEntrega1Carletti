import { Component } from "react";
import "./App.css";

//Images
import setup1 from "./imgs/setup1.jpg";
import setup2 from "./imgs/setup2.jpg";
import setup3 from "./imgs/setup3.jpg";


// Components
import ItemCard from "./components/itemCard/itemCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <ItemListContainer greeting="En donde podras encontrar los mejores setups!" />
        </div>
        <div className="itemSection">
          
          <ItemCard
            name="Office space"
            description="The best enviroment for your working space"
            img={setup1}
          />
          <ItemCard
            name="Gaming girl"
            description="Your cutes setup for the new empowered"
            img={setup2}
          />
          <ItemCard
            name="Gaming wave"
            description="Make your setup the best looking to stream on!"
            img={setup3}
          />
        </div>
      </div>
    );
  }
}

export default App;
