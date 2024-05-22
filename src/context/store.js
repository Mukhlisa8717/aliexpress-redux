import { create } from "zustand";
import { wishlist } from "./wishlist";
import { cart } from "./cart";

const useStore = create((set) => ({
  ...wishlist(set),
  ...cart(set),
}));

export default useStore;
