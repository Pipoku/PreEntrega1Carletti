import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/itemCard";
import "./CategoryPage.css"

const Category = () => {
  const [characters, setChars] = useState([]);

  let { categoryId } = useParams();
  
  console.log(characters)
  let filteredCharacters = characters.filter((char) => {
    console.log(char)
    return char.info.Afiliação === categoryId;
  });

  console.log("filteredCharacters", filteredCharacters);

  useEffect(() => {
    if(characters.length === 0){
      axios('https://naruto-api.fly.dev/api/v1/characters').then((json) =>
      setChars(json.data) 
      );
    }

  }, []);

  return (
    <div className="Cards-List">
      {filteredCharacters.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <ItemCard props={char} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
