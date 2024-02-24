import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem}) => {
  const {deleteItem, addItemToCart, removeItemFromCart} =
    useContext(CartContext);
  const {name, price, imageUrl, quantity} = cartItem;

  const deleteHandler = () => {
    deleteItem(cartItem);
  };

  const addHandler = () => {
    addItemToCart(cartItem);
  };

  const removeHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
