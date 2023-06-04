import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <p style={{background: "#98ACE3", marginTop: "-10px", color: "white" }}>Bienvenidos a SetupWorld: {greeting}</p>
    </div>
  );
};

export default ItemListContainer;