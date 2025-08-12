import { getTours } from "../api/tours";
import type { Tour } from "../api/tours";
import { Card } from "../components/Card";
import { CardSkeleton } from "../components/CardSkeleton";
import { Error } from "../components/Error";
import { useCartStore } from "../store/store";
import { useQuery } from "@tanstack/react-query";

export const TourList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const {
    data: tourList,
    isPending,
    isError,
  } = useQuery<Tour[], Error>({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  if (isPending) {
    return (
      <div className="flex gap-[10px] justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) return <Error />;

  return (
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
