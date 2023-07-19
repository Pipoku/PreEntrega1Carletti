import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/itemCard";


// FIRBASE - FIRESTORE
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


const DetailCharacterPage = () => {

    let { id } = useParams();

    const [product, setProductsData] = useState([]);
    useEffect(() => {
      const getProducts = async () => {
        const q = query(collection(db, "products"),where(documentId(),"==",id));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProductsData(docs);
      };
      getProducts();
    }, [id]);

  
    return (
      <div style={{display: 'flex', justifyContent: 'center',  margin: "100px" }}>
        {
          product.map((data) => {
            return(
            <div key={data.id}>
              <ItemCard props= {data} />
            </div>)
          
          
          })
        }
      </div>
      );
  };
  export default DetailCharacterPage;
  