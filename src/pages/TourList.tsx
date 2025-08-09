import { Card } from "../components/Card";
import { useCartStore } from "../store/store";
import { getTours } from "../api/tours";
import type { Tour } from "../api/tours";
import {useEffect, useState} from "react";

export const TourList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [tourList, setToursList] = useState<Tour[]>([]);

  useEffect(() => {
    const fetcData = async () => {
      const data = await getTours()
      setToursList(data)
    }

    fetcData()
  }, [])

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
