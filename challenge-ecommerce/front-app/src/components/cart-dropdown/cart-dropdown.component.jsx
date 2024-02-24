import CartItem from "../cart-item/cart-item.component";

import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";
import {useNavigate} from "react-router-dom";
import Button from "../button/button.component";
import {DropdownContainer, Message, CartItems} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <DropdownContainer>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </CartItems>
      ) : (
        <Message>Your cart is empty</Message>
      )}

      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </DropdownContainer>
  );
};

export default CartDropdown;
