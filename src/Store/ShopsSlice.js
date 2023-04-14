import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allShops: [],
};

const shopSlice = createSlice({
  name: "shops",
  initialState: initialState,
  reducers: {
    addShops: (shop, action) => {
      const shops = action.payload;
      shop.allShops = shops;
    },

    addFeedback: (shop, action) => {
      const { likes, dislikes, id } = action.payload;
      axios
        .post("http://localhost:4500/hotcup/shop", { likes, dislikes, id })
        .then((result) => {
          shop.allShops.map((shop) => {
            if (shop.id === +id) {
              shop.likes = result.data[0].likes;
              shop.dislikes = result.data[0].dislikes;
            }
          });
        });
    },
  },
});
export const { addShops, addFeedback } = shopSlice.actions;
export default shopSlice;
