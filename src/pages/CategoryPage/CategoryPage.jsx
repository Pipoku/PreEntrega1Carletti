import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/itemCard";

const Category = () => {
  const [chars, setChars] = useState([]);

  let { categoryId } = useParams();
  
  let filteredCharacters = chars.filter((char) => {
    return char.species === categoryId;
  });

  console.log("filteredCharacters", filteredCharacters);

  useEffect(() => {
    axios(`https://naruto-api.fly.dev/api/v1/characters`).then((json) =>
      setChars(json.data.results)
    );
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
