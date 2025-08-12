import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/Card";
import { useCartStore } from "../store/store";
import { getToursInCart, type Tour } from "../api/tours";
import { Error } from "../components/Error";

export const Cart = () => {
  const productIDs = useCartStore((state) => state.toursInCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const {
    data: products,
    isPending,
    isError,
  } = useQuery<Tour[], Error>({
    queryKey: ["cartTours", productIDs],
    queryFn: () => getToursInCart(productIDs),
  });

  if (isPending) return <div>Spinner</div>;

  if (isError) return <Error />;

  return (
    <>
      {products.length ? (
        products.map((tour) => (
          <Card
            tour={tour}
            btnText="Remove from cart"
            btnFunction={() => removeFromCart(tour.id)}
            key={tour.id}
          />
        ))
      ) : (
        <h1>Cart is empty!</h1>
      )}
    </>
  );
};
