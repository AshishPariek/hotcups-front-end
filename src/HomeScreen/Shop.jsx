import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addFeedback } from "../Store/ShopsSlice";

const Shop = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shop.allShops);
  const feedbackData = shops.filter((e) => {
    if (+id === e.id) {
      return e;
    } else {
      return [];
    }
  });

  const [feedback, setFeedback] = useState({
    likes: feedbackData[0].likes,
    dislikes: feedbackData[0].dislikes,
  });

  const likeDislikeHandler = (e) => {
    const { name } = e.target;
    name === "likes"
      ? setFeedback((prev) => ({ ...prev, likes: prev.likes + 1 }))
      : setFeedback((prev) => ({ ...prev, dislikes: prev.dislikes + 1 }));
    dispatch(
      addFeedback(
        name === "likes"
          ? { likes: feedback.likes + 1, dislikes: feedback.dislikes, id }
          : { likes: feedback.likes, dislikes: feedback.dislikes + 1, id }
      )
    );
  };

  return (
    <div className="shopMain" style={{ width: "100%" }}>
      {shops.map((shop, i) => {
        if (shop.id === +id) {
          return (
            <div key={i}>
              <div key={i} className="shopContainer">
                <img
                  className="shopImg"
                  src={`http://localhost:4500/static/${shop.image}`}
                  alt="Not Found"
                ></img>
                <div className="shopDetails">
                  <h2>{shop.name}</h2>
                  <span>{shop.parent_company}</span>
                </div>
              </div>
              <div className="feedbackContainer">
                <button
                  className="feedback"
                  name="likes"
                  onClick={likeDislikeHandler}
                >
                  {feedback?.likes}
                  Like
                </button>
                <button
                  className="feedback"
                  name="dislikes"
                  onClick={likeDislikeHandler}
                >
                  {feedback?.dislikes}
                  Dislike
                </button>
              </div>
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
};
export default Shop;
