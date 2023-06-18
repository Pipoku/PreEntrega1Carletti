import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./itemCard.css"

const ItemCard = ( props ) => {
  const { images, name, info } = props.props;

  return (
    <Card sx={{ maxWidth: 300 }} variant="raised" className="card">
      <CardActionArea>
        <CardMedia component="img" image={images[0]} alt="logo-user" className="card_img"/>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.Afiliação} | {info["Registro Ninja"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.Ocupação}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
