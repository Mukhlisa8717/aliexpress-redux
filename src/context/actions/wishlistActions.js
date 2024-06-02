export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const toggleLike = (item) => ({
  type: TOGGLE_LIKE,
  payload: item,
});
