import React from "react";

const AllShops = ({ shop }) => {
  return (
    <div className="shopContainer">
      <img src={`http://localhost:4500/static/${shop.image}`} />
    </div>
  );
};

export default AllShops;
