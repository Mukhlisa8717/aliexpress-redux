export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT_CART_QUANTITY = "INCREMENT_CART_QUANTITY";
export const DECREMENT_CART_QUANTITY = "DECREMENT_CART_QUANTITY";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const REMOVE_ALL_ITEMS_FROM_CART = "REMOVE_ALL_ITEMS_FROM_CART";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const incrementCartQuantity = (itemId) => ({
  type: INCREMENT_CART_QUANTITY,
  payload: itemId,
});

export const decrementCartQuantity = (itemId) => ({
  type: DECREMENT_CART_QUANTITY,
  payload: itemId,
});

export const removeItemFromCart = (itemId) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: itemId,
});

export const removeAllItemsFromCart = () => ({
  type: REMOVE_ALL_ITEMS_FROM_CART,
});
