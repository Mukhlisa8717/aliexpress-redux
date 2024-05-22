export const cart = (set) => ({
  cart: JSON.parse(localStorage.getItem("carts")) || [],
  addToCart: (item) => {
    set((state) => {
      const index = state.cart.findIndex((el) => el.id === item.id);
      const newCart =
        index < 0 ? [...state.cart, { ...item, quantity: 1 }] : state.cart;
      localStorage.setItem("carts", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  incrementCartQuantity: (itemId) => {
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      );
      localStorage.setItem("carts", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  decrementCartQuantity: (itemId) => {
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      );
      localStorage.setItem("carts", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  removeItemFromCart: (itemId) => {
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== itemId);
      localStorage.setItem("carts", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  removeAllItemsFromCart: () => {
    set(() => {
      const newCart = [];
      localStorage.setItem("carts", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
});
