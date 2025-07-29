import { useParams } from "react-router";
import { tours, type Tour } from "./TourList";
import { useCartStore } from "../store/store";

export const TourInfo = () => {
  const { id } = useParams();

  const tour: Tour | undefined = tours.find((tour) => tour.id === Number(id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!tour) return <h2>This is not the tour you're looking for</h2>;

  const { id: tourId, name, description, price } = tour;

  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>{price}</div>

      <button onClick={() => addToCart(tourId)}>Add to cart</button>
    </>
  );
};
