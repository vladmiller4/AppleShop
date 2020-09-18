import { GET_CART_ITEMS, REMOVE_FROM_CART, ADD_TO_CART, CLEAR_CART } from '../actions/cart.actions';
import { UPDATE_PRODUCT_AVAILABILITY } from "../actions/products.action";

const initState = {
    inCart: []
};

export function cartReducer(state = initState, action) {
    switch (action.type) {
      case GET_CART_ITEMS: {
        return state.inCart;
      }
      case ADD_TO_CART: {
        const inCart = [...state.inCart];
        const product = inCart.find((product) => {
          return product.id === action.payload.product.id
        });
        if (product) {
          product.count += action.payload.amount;
        } else {
          const updatedProduct = {
            id: action.payload.product.id,
            name: action.payload.product.name,
            price: action.payload.product.price,
            count: action.payload.amount
          };
          inCart.push(updatedProduct);
        }
        return { ...state,inCart } 
      }
      case REMOVE_FROM_CART: {
        const inCart = [...state.inCart];
        const productIndex = inCart.findIndex((product) => {
          return product.id === action.payload.product.id;
        });
        const product = inCart[productIndex];
        product.count -= action.payload.amount;
        if (product.count === 0) {
          inCart.splice(productIndex, 1)
        }
        return { ...state, inCart };
      }
      case CLEAR_CART: {
        return { ...state, inCart: [] }
      }
      default:
        return state;
    }
}

export function addToCart(product, dispatch, amount) {
    if (product.available >= amount) {
      dispatch({
        type: ADD_TO_CART,
        payload: { product, amount }
      });
      dispatch({
        type: UPDATE_PRODUCT_AVAILABILITY,
        payload: { product, amount: -amount }
      });
    }
}
  
export function removeFromCart(product, dispatch, amount) {
    dispatch({
      type: UPDATE_PRODUCT_AVAILABILITY,
      payload: { product,amount }
    });
  
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { product,amount }
    })
}