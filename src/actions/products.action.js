export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const UPDATE_PRODUCT_AVAILABILITY = 'UPDATE_PRODUCT_AVAILABILITY';

export const getProductList = () => dispatch => {
  try {
    const url = 'http://localhost:3000/products.json';
    fetch(url).then((response) => {
      return response.json();
    }).then((response) => {
      dispatch({type: GET_PRODUCT_LIST, payload: response.products});
    })
  } catch (error) {
    console.error('Get data error:', error.name, error.message);
  }
};