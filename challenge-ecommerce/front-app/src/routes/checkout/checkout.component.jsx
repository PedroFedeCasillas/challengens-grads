import {useContext} from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CartContext} from "../../contexts/cart.contexts";

import "./checkout.styles.scss";

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.id} />
      ))}
      <span className="total">Total {`$${cartTotal}`}</span>
    </div>
  );
};

export default Checkout;
