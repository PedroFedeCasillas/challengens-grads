import {CartContext} from "../../contexts/cart.contexts";
import {useContext} from "react";

import {ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
  const {toggle, setToggle, cartCount} = useContext(CartContext);

  const toggleCart = () => {
    setToggle(!toggle);
  };

  return (
    <CartIconContainer onClick={toggleCart} className="cart-icon-container">
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
