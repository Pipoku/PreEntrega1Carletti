import { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../itemCard/itemCard";
import "./ItemCardList.css"
import { Link } from "react-router-dom";

const ItemCardList = () => {
    const [characters, setChars] = useState([]);

    useEffect(() => {
      if(characters.length === 0){
        axios('https://naruto-api.fly.dev/api/v1/characters').then((json) =>
        setChars(json.data) 
        );
      }

    }, []);
    
    return (
      <div className="itemSection">
        {characters.map((char) => {
          return (
            <div style={{ margin: 10, maxWidth: 300 }} key={char.id}>
              <Link to={`detail/${char.id}`}>
                <ItemCard props={char} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ItemCardList;
  