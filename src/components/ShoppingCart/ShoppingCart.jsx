import Card from "@mui/material/Card";
import { CartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";
import CardMedia from "@mui/material/CardMedia";
import './ShoppingCart.css'

const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
      <div>
        <div>Items in cart: {quantity}</div>
        <div>Total: ${totalPrice}</div>
        <div className="cart-container">
        <h2 className="cart-title">Your Cart Detail</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-info">
              <Card sx={{ maxWidth: 300, minWidth: 300 }} variant="raised" className="card shoppingCart">
                <CardMedia component="img" image={item.img} alt="product" className="card_img"/>
                <p className="item-price">${item.price}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
  
  export default ShoppingCart;
  