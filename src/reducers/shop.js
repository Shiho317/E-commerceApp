import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
} from '../actions/index';

const initialState = {
  products: '',
  cart: []
};

const shopReducers = (state = initialState, action) => {
  let updatedCart;
  let updatedItemindex;

  switch(action.type){
    case ADD_PRODUCT_TO_CART:
        updatedCart = [...state, state.cart];
        updatedItemindex = updatedCart.findIndex(item => item.id === action.payload.id);
          if(updatedItemindex < 0){
            updatedCart.push({...action.payload, quantity: 1});
          } else {
            const updatedItem = {
              ...updatedCart[updatedItemindex]
            };
            updatedItem.quantity++;
            updatedCart[updatedItemindex] = updatedItem;
          };
      return {...state, cart: updatedCart};

    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemindex = updatedCart.findIndex(item => item.id === action.payload);
      updatedCart.splice(updatedItemindex, 1);
      return {...state, cart: updatedCart};

    case INCREMENT_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemindex = updatedCart.findIndex(item => item.id === action.payload);
      
      const incrementedItem = {
        ...updatedCart[updatedItemindex]
      };
      incrementedItem.quantity++;
      updatedCart[updatedItemindex] = incrementedItem;

      return {...state, cart: updatedCart};

    case DECREMENT_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemindex = updatedCart.findIndex(item => item.id === action.payload);

      const decrementedItem = {
        ...updatedCart[updatedItemindex]
      };
      decrementedItem.quantity--;
      updatedCart[updatedItemindex] = decrementedItem;

      return {...state, cart: updatedCart};

    default: 
      return state;
  }

};

export default shopReducers;