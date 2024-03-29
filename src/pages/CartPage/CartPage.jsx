import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./CartPage.css";
import { CartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart"

import { db } from "../../firebase/firebaseConfig";

import { collection, addDoc } from "firebase/firestore";

import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const CartPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);
  const [cart, setCart] = useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,cart,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div style={styles.containerShop}>
      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
      <h1 style={{ color: "white" }}>Shop</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={handleOnChange}
        />
        <button className="btnASendAction">Send</button>
      </form>
        <ShoppingCart/>
      
    </div>
  );
};

export default CartPage;
