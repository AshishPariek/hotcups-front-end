import React, { useState, useEffect } from "react";
import axios from "axios";
import AllShops from "./AllShops";

const Home = () => {
  const [shops, setShops] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetcher = async () => {
    const res = await axios.get("http://localhost:4500/hotcup/shops");
    setShops(res.data);
    setFetching(false);
  };

  useEffect(() => {
    fetcher();
  }, []);

  if (fetching) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="homeContainer">
        {shops.map((shop, i) => {
          return <AllShops key={i} shop={shop} />;
        })}
      </div>
    );
  }
};

export default Home;
