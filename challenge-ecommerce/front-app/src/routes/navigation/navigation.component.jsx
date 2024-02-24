import {Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.utils";

import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.contexts";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

//? HERE WE USE STYLED COMPONENTS AS A WAY TO SHOW HOW THEY WORK AND UNDERSTAND THE BENEFITS OF THIS COMPONENTS TO AVOID ANY STYLE CLASHES THROUGHOUT THE PAGE

import {
  NavLink,
  NavigationContainer,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";

const NavBar = () => {
  const {currentUser} = useContext(UserContext);
  const {toggle} = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {!currentUser ? (
            <NavLink to="/auth">SIGN IN</NavLink>
          ) : (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {toggle && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
