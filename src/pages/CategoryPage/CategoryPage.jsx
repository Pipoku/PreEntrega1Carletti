import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/itemCard";
import "./CategoryPage.css"
import { Link } from "react-router-dom";
// FIRBASE - FIRESTORE
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const Category = () => {
  let { categoryId } = useParams();

  const [products, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"),
        where("category","==",categoryId)
        );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    getProducts();
  }, [categoryId]);

  return (
    <div className="Cards-List">
      {products.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <Link to={`/detail/${char.id}`}>
              <ItemCard props={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
