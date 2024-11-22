import { useState } from "react";
import { assets } from "../../assets/assets.js";
import "./FoodItem.css";

const FoodItem = ({ id, name, description, image, price }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="Food image" />
        {!itemCount ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="Plus"
            onClick={() => setItemCount((prev) => prev + 1)}
          />
        ) : (
          <div className="food-icon-counter">
            <img
              src={assets.remove_icon_red}
              alt="Minus"
              onClick={() => setItemCount((prev) => prev - 1)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="Plus"
              onClick={() => setItemCount((prev) => prev + 1)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Stars" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
