import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./itemCard.css"

const ItemCard = ( props ) => {

  const { name, description, img } = props;

  return (
    <Card sx={{ maxWidth: 345 }} variant="raised">
      <CardActionArea>
        <CardMedia component="img" image={img} alt="logo-user" className="card_img"/>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
