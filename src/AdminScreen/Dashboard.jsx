import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logOut } from "../Store/adminSlice";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const addHandler = () => {
    navigate("/Addshop");
  };

  const editHandler = (id) => {
    navigate(`/EditShop/${id}`);
  };

  const logOutHandler = () => {
    if (window.confirm("Are Sure want to LogOut")) {
      dispatch(logOut());
      navigate("/");
    }
  };

  if (fetching) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="adminDashboard">
        <div className="adminDashboardHeader">
          <button
            onClick={addHandler}
            style={{
              padding: "7px",
              border: "none",
              backgroundColor: "#ffa958",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
            <i className="fa-solid fa-store"></i>
          </button>
          <i
            onClick={logOutHandler}
            style={{ cursor: "pointer" }}
            className="fa-solid fa-right-from-bracket fa-xl"
          ></i>
        </div>
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
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="http://gmail.com"
                  >
                    <i
                      style={{ color: "#FA8072" }}
                      className="fa-solid fa-envelope"
                    ></i>
                    -{shop.email}
                  </a>
                  <span>
                    <i
                      style={{ color: "#00BFFF" }}
                      className="fa-solid fa-phone"
                    ></i>
                    {shop.contact_number}
                  </span>
                </div>
                <i
                  className="fa-solid fa-pen-to-square"
                  style={{ cursor: "pointer", color: "#3CB371" }}
                  onClick={() => editHandler(shop.id)}
                ></i>
                <i
                  className="fa-solid fa-trash "
                  onClick={() => deleteHandler(shop.id)}
                  style={{ cursor: "pointer", color: "#DC143C" }}
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
