import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/cart-item";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((CT) => (
          <CartItem key={CT.id} item={CT} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
