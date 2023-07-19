import { useState, useEffect } from "react";
import ItemCard from "../itemCard/itemCard";
import "./ItemCardList.css"
import { Link } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemCardList = () => {
    const [products, setProductsData] = useState([]);
    useEffect(() => {

      const getProducts = async () => {
        const q = query(collection(db, "products"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProductsData(docs);
      };
      getProducts();
    }, []);

  return (
    <>
      {
        <div className="itemSection">
        {products.map((data) => {
          return (
            <div style={{ margin: 10, maxWidth: 300 }} key={data.id}>
              <Link to={`detail/${data.id}`}>
                <ItemCard props={data} />
              </Link>
            </div>
          );
        })}
      </div>
      }
    </>
  );

}
  
  export default ItemCardList;
  