export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY';
export const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY';

export const addProduct = (product) => {
  return{
    type: ADD_PRODUCT_TO_CART,
    payload: product
  }
};

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId
  }
};

export const incrementItem = (productId) => {
  return {
    type: INCREMENT_ITEM_QUANTITY,
    payload: productId
  }
};

export const decrementItem = (productId) => {
  return {
    type: DECREMENT_ITEM_QUANTITY,
    payload: productId
  }
};


