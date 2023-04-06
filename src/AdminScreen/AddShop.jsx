import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddShop = () => {
  const [product, setProduct] = useState({
    name: "",
    shopImage: "",
    parentCompany: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const imageHandler = (e) => {
    setProduct((prev) => ({ ...prev, shopImage: e.target.files[0] }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      product.name ||
      product.image ||
      product.parentCompany ||
      product.email ||
      product.contactNumber ||
      product.address
    ) {
      console.log(product.shopImage, product.shopImage.name);
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("shopImageName", product.shopImage.name);
      formData.append("shopImage", product.shopImage);
      formData.append("parentCompany", product.parentCompany);
      formData.append("email", product.email);
      formData.append("contactNumber", product.contactNumber);
      formData.append("address", product.address);
      axios.post("http://localhost:4500/hotcup/admin/addproduct", formData);
      toast.success("Shop Added");
    } else {
      toast.error("All Fields are Required");
    }
    setProduct({
      name: "",
      image: "",
      parentCompany: "",
      email: "",
      contactNumber: "",
      address: "",
    });
  };

  return (
    <div className="dashboardContainer">
      <div className="productFormContainer">
        <div className="productFormHeader">
          <h2 style={{ color: "#fffdef" }}>Add Shop</h2>
        </div>
        <form onSubmit={submitHandler} action="#" className="productForm">
          <input
            type="text"
            value={product.name}
            name="name"
            onChange={inputHandler}
            placeholder="Enter Name"
          ></input>
          <input
            onChange={imageHandler}
            type="file"
            name="shopImage"
            style={{ border: "1px solid gray" }}
          />
          <input
            value={product.parentCompany}
            type="text"
            name="parentCompany"
            onChange={inputHandler}
            placeholder="Parent Company"
          ></input>
          <input
            value={product.email}
            type="text"
            name="email"
            onChange={inputHandler}
            placeholder="Email"
          ></input>
          <input
            value={product.contactNumber}
            type="text"
            name="contactNumber"
            onChange={inputHandler}
            placeholder="Contact Number"
          ></input>
          <textarea
            value={product.address}
            onChange={inputHandler}
            name="address"
            style={{
              height: "4rem",
              padding: "7px",
              width: "80%",
              alignSelf: "center",
            }}
            placeholder="Address"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddShop;
