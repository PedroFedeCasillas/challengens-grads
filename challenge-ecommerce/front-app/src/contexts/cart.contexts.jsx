import {createContext, useState, useEffect} from "react";

//? TO ADD AN ITEM TO THE CART, WE NEED TO CHECK IF IT ALREADY EXISTS IN THE CART, IF IT DOES WE INCREMENT ITS QUANTITY AND RETURN THE SAME ITEM, IF NOT WE ADD THE ITEM ADDING THE QUANTITY VALUE TO THE EXISTING ARRAY OF ITEMS IN THE CART... ITS IMPORTANT TO RETURN A NEW CARTITEMS ARRAY WITH THE ORIGINAL CARTITEMS ARRAY SPREAD SO WE DONT LOSE THE EXISTING CONTENT.

const addCartItem = (cartItems, productToAdd) => {
  const found = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (found) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [...cartItems, {...productToAdd, quantity: 1}];
};

//? TO REMOVE ITEMS THE LOGIC OF THE PREVIOUS ADDING FUNCTION IS VERY SIMILAR, FIRST WE FIND THE ITEM IN THE ARRAY, IF IT EXISTS ASN THE QUANTITY IS 1 WHE REMOVE IT FORM THE ARRAY BY FILTERING AND RETURNING ALL ITEMS THAT DO NOT HAVE THE SAME IT, IF QUANTITY IS MORE THAN 1 WE REDUCE THE QUANTITY BY 1

const removeCartItem = (cartItems, productToRemove) => {
  const found = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (found.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

const deleteCartItem = (cartItems, productToDelete) => {
  const found = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );
  if (found) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }
};

export const CartContext = createContext({
  toogle: false,
  setToogle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItem: () => {},
  cartCount: 0,
  total: 0,
});

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const deleteItem = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  //? TO INCREASE THE COUNT OF ITEMS ON THE CART ICON WE NED TO USE A REDUCER THAT ADDS UP EACH TIME CARDITEMS GETS MODIFIED

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    toggle,
    setToggle,
    addItemToCart,
    removeItemFromCart,
    deleteItem,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
