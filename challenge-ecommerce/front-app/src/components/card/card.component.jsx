import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import "./card.styles.scss";

const Card = ({product}) => {
  const {addItemToCart} = useContext(CartContext);
  const {name, price, imageUrl} = product;

  const addProduct = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default Card;
