import { Card } from "../components/Card";
import { useCartStore } from "../store/store";
import { tours } from "./TourList";

export const Cart = () => {
  const productIDs = useCartStore((state) => state.toursInCart);
  const products = tours.filter((tour) => productIDs.includes(tour.id));

  const removeFromCart = useCartStore((state) => state.removeFromCart);

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
