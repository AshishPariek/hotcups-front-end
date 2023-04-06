import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  const [shops, setShops] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetcher = async () => {
    const res = await axios.get("http://localhost:4500/hotcup/allshops");
    setShops(res.data);
    setFetching(false);
  };

  useEffect(() => {
    fetcher();
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure Want to Delete ?")) {
      axios
        .post("http://localhost:4500/hotcup/admin/deleteproduct", { id })
        .then((result) => {
          toast.success(result.data);
        });
    }
  };

  const editHandler = (id) => {
    console.log(id);
  };

  if (fetching) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="adminDashboard">
        <div className="totalShopList">
          {shops.map((shop, i) => {
            return (
              <div key={i} className="shopListItems">
                <img
                  className="shopListItemImage"
                  src={`http://localhost:4500/static/${shop.image}`}
                  alt="Not Found"
                ></img>
                <div className="shopListItemsDetail items">
                  <h3>{shop.name}</h3>
                  <span>{shop.parent_company}</span>
                  <p>{shop.address}</p>
                </div>
                <div className="shopListItemsContacts items">
                  <h3>Contact :</h3>
                  <a href="gmail.com">
                    <i className="fa-solid fa-envelope"></i>-{shop.email}
                  </a>
                  <span>
                    <i className="fa-solid fa-phone"></i>
                    {shop.contact_number}
                  </span>
                </div>
                <i
                  class="fa-solid fa-pen-to-square"
                  style={{ cursor: "pointer" }}
                  onClick={() => editHandler(shop.id)}
                ></i>
                <i
                  className="fa-solid fa-minus"
                  onClick={() => deleteHandler(shop.id)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Dashboard;
