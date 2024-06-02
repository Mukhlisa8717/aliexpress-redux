import { TOGGLE_LIKE } from "../actions/wishlistActions.js";

const initialState = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE: {
      const item = action.payload;
      const index = state.findIndex((el) => el.id === item.id);
      const newState =
        index < 0 ? [...state, item] : state.filter((el) => el.id !== item.id);
      localStorage.setItem("wishlist", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default wishlistReducer;
