import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from '@mui/material/Button';
import "./itemCard.css"
import { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";

const ItemCard = ( props ) => {
  const { img, price, category,size,id } = props.props;
  const [cart, setCart] = useContext(CartContext)

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item)=>item.id === id)
      if(isItemsFound){
        return currItems.map((item)=>{
          if(item.id === id){
            return {...item,quantity: item.quantity +1}
          } else {
            return item;
          }
        })
      } else {
        return [...currItems, {id, quantity: 1, price, img}]
      }
    })
  }
  const removeItem = (id) =>{
    setCart((currItems) => {
      if(currItems.find((item)=> item.id === id)?.quantity === 1){
        return currItems.filter((item) => item.id !==id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1};
          } else {
            return item;
          }
        })
      }
    })
  }
  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <Card sx={{ maxWidth: 300, minWidth: 300 }} variant="raised" className="card">
      <CardActionArea>
        <CardMedia component="img" image={img} alt="product" className="card_img"/>
        <CardContent>
          <Typography variant="body2" color="text.secondary" textAlign={"center"}>
            {category} | {size}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" textAlign={"center"}>
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      {quantityPerItem === 0 ? (
        <Button className="item-add-button" onClick={() => addToCart()}>
          + Add to cart
        </Button>
      ) : (
        <Button className="item-plus-button" style={{marginRight:50}} onClick={() => addToCart()}>
          + add more
        </Button>
      )}

      {quantityPerItem > 0 && (
        <Button className="item-minus-button"  onClick={() => removeItem(id)}>
          subtract item
        </Button>
      )}
      {quantityPerItem > 0 && (
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          Quantity of this: {quantityPerItem}
        </Typography>
      )}
    </Card>
  );
};

export default ItemCard;
