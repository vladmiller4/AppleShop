import { GET_PRODUCT_LIST, ADD_NEW_PRODUCT, UPDATE_PRODUCT_AVAILABILITY } from '../actions/products.action';

const initState = {
  products: []
};

export function productsReducer(state = initState, action) {
    switch (action.type) {
      case GET_PRODUCT_LIST: {
        return { ...state, products: action.payload };
      }
      case ADD_NEW_PRODUCT: {
        const products = [...state.products];
        const newProduct = action.payload;
        products.push(newProduct);
        return { ...state, products };
      }
      case UPDATE_PRODUCT_AVAILABILITY: {
        const products = [...state.products];
        const updatedProduct = products.find((product) => {
          return product.id === action.payload.product.id;
        });
        if (updatedProduct) {
          updatedProduct.available += action.payload.amount;
        }
        return { ...state, products }
      }
      default: 
        return state;
    }
}   