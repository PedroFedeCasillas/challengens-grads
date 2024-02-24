import styled from "styled-components";

import {ReactComponent as ShoppingSvg} from "../../assets/shopping-bag.svg";

//? WE CAN IMPORT AND STYLE SVG ELEMNTS DIRECTLY ON THE STYLES FILE AND THEN IMPORT IT AS A COMPONENT

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 34px;
  height: 34px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 9px;
`;
