import {
  ADD_TO_CART,
  INCREMENT_CART_QUANTITY,
  DECREMENT_CART_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ALL_ITEMS_FROM_CART,
} from '../actions/cartAction.js'

const initialState = JSON.parse(localStorage.getItem("carts")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const index = state.findIndex((el) => el.id === item.id);
      const newState = index < 0 ? [...state, { ...item, quantity: 1 }] : state;
      localStorage.setItem("carts", JSON.stringify(newState));
      return newState;
    }
    case INCREMENT_CART_QUANTITY: {
      const newState = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      localStorage.setItem("carts", JSON.stringify(newState));
      return newState;
    }
    case DECREMENT_CART_QUANTITY: {
      const newState = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      );
      localStorage.setItem("carts", JSON.stringify(newState));
      return newState;
    }
    case REMOVE_ITEM_FROM_CART: {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(newState));
      return newState;
    }
    case REMOVE_ALL_ITEMS_FROM_CART: {
      localStorage.setItem("carts", JSON.stringify([]));
      return [];
    }
    default:
      return state;
  }
};

export default cartReducer;