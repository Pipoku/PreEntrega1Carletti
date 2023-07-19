import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ShoppingCartContext";

const CardWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)
  return (
    <Link to="/cart">
        <div style={{ display: "flex", alignItems: "center", width: "40px", paddingLeft: "10px" }}>
          <LocalGroceryStoreIcon sx={{ color: "white" }} />
          <p style={{ color: "white" }}>{quantity}</p>
        </div>
    </Link>
  );
};

export default CardWidget;
