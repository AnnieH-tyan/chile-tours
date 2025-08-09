import { Card } from "../components/Card";
import { useCartStore } from "../store/store";
import {useMemo} from "react";

export const Cart = () => {
  const productIDs = useCartStore((state) => state.toursInCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const tours = []
  const products = useMemo(() =>
      tours.filter((tour) => productIDs.includes(tour.id)),
      [tours, productIDs])

  return (
    <>
      {products.length ? (
        products.map((tour) => (
          <Card
            tour={tour}
            btnText="Remove from cart"
            btnFunction={() => removeFromCart(tour.id)}
          />
        ))
      ) : (
        <h1>Cart is empty!</h1>
      )}
    </>
  );
};
