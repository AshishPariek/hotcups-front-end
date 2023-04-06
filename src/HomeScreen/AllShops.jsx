import React from "react";
import { useNavigate } from "react-router-dom";

const AllShops = ({ shop }) => {
  const navigate = useNavigate();
  return (
    <div className="allShopContainer">
      <img
        className="allShopImg"
        onClick={() => navigate(`/shop/${shop.id}`)}
        src={`http://localhost:4500/static/${shop.image}`}
        alt="Unavailable"
      />
      <h3>{shop.name}</h3>
      <span>Shop Number :{shop.id}</span>
    </div>
  );
};

export default AllShops;
