import { getTours } from "../api/tours";
import type { Tour } from "../api/tours";
import { Card } from "../components/Card";
import { useCartStore } from "../store/store";
import { useQuery } from "@tanstack/react-query";

export const TourList = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { data: tourList } = useQuery<Tour[], Error>({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  return !tourList ? (
    <div>Spinner</div>
  ) : (
    <div className="flex gap-[10px] justify-center">
      {tourList.map((tour) => (
        <Card
          tour={tour}
          btnText="Add to cart"
          btnFunction={() => addToCart(tour.id)}
          key={tour.id}
        />
      ))}
    </div>
  );
};
