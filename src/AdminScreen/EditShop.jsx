import React, { useState } from "react";

const EditShop = () => {
  const [editData, setEditData] = useState({
    name: "",
    shopImge: "",
    parentCompany: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  const inputHadler = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const imageHadler = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <div className="editFormContainer">
      <form onSubmit={(e) => e.preventDefault()} className="editShopForm">
        <div className="editShopFormHeader">
          <h2>EDIT SHOP</h2>
        </div>
        <div className="editShopFormBody">
          <input
            value={editData.name}
            type="text"
            onChange={inputHadler}
            name="name"
            placeholder="Name"
          />
          <input
            type="file"
            onChange={imageHadler}
            name="shopImage"
            style={{ border: "1px solid gray" }}
          />
          <input
            type="text"
            onChange={inputHadler}
            value={editData.parentCompany}
            name="parentCompany"
            placeholder="Parent Company"
          />
          <input
            type="text"
            onChange={inputHadler}
            name="email"
            value={editData.email}
            placeholder="Email"
          />
          <input
            type="text"
            onChange={inputHadler}
            value={editData.contactNumber}
            name="contactNumber"
            placeholder="Contact Number"
          />
          <textarea
            name="address"
            value={editData.address}
            onChange={inputHadler}
            style={{ height: "15%", padding: "5px" }}
            placeholder="Address"
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditShop;
