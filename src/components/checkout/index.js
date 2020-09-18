import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {CLEAR_CART} from "../../actions/cart.actions";
import "./checkout.css";

export function Checkout() {
const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.inCart);
  const renderPurchases = cartProducts.map((product) => (
    <div className="purchase" key={product.id}>
      <p>Name: {product.name}</p>
      <div className="purchase-right">
        <p>Count: {product.count}</p>
        <p>Total Price: ${product.price * product.count}</p>
      </div>
    </div>
  ));
  const history = useHistory();
  const clearCart = () => {
    history.push('/products');
    dispatch({
      type: CLEAR_CART
    });
  };

  return (
        <div className="checkout-modal">
            <div className="checkout-modal-body">
                <div className="checkout-modal-header">
                    <h3>Thank you for your purchase!</h3>
                </div>
                {renderPurchases}
                <button onClick={clearCart}>Continue Shopping</button>
            </div>
        </div>
  )
}
