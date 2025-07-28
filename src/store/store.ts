import { create } from "zustand";

interface CartState {
  toursInCart: number[];
  addToCart: (tourId: number) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  toursInCart: [],
  addToCart: (tourId: number) =>
    set((state) => ({ toursInCart: [...state.toursInCart, tourId] })),
}));
