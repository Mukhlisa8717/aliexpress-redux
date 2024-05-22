export const wishlist = (set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  toggleLike: (item) => {
    set((state) => {
      const index = state.wishlist.findIndex((el) => el.id === item.id);
      const newWishlist =
        index < 0
          ? [...state.wishlist, item]
          : state.wishlist.filter((el) => el.id !== item.id);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return { wishlist: newWishlist };
    });
  },
});
