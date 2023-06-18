import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/itemCard";

const DetailCharacterPage = () => {
    const [characters, setChar] = useState([]);

    let { id } = useParams();
  
    useEffect(() => {
      axios(`https://naruto-api.fly.dev/api/v1/characters/${id}`).then((json) =>
        setChar(json.data)
      );
    }, [id]);
  
    return (
      <div style={{display: 'flex', justifyContent: 'center',  margin: "100px" }}>
        {characters.id ? <ItemCard props={characters} /> : null}
      </div>
    );
  };
  export default DetailCharacterPage;
  