import { create } from "zustand";

interface CartState {
  toursInCart: number[];
  addToCart: (tourId: number) => void;
  removeFromCart: (tourId: number) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  toursInCart: [],
  addToCart: (tourId: number) =>
    set((state) => ({ toursInCart: [...state.toursInCart, tourId] })),
  removeFromCart: (tourId: number) =>
    set((state) => ({
      toursInCart: state.toursInCart.filter((id) => id !== tourId),
    })),
}));
