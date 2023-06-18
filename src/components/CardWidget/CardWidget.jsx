import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const CardWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "40px", paddingLeft: "10px" }}>
      <LocalGroceryStoreIcon sx={{ color: "white" }} />
      <p style={{ color: "white" }}>7</p>
    </div>
  );
};

export default CardWidget;
