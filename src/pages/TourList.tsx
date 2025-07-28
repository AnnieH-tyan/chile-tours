import { Card } from "../components/Card";
import { useCartStore } from "../store/store";

export interface Tour {
  id: number;
  name: string;
  location: string;
  imgPath: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    name: "Atacama Stargazing",
    location: "San Pedro de Atacama",
    imgPath: "atacama.jpg",
  },
  {
    id: 2,
    name: "Grey Lake",
    location: "Torres del Paine",
    imgPath: "greyLake.jpeg",
  },
  {
    id: 3,
    name: "City and History",
    location: "Santiago",
    imgPath: "santiago.jpeg",
  },
];

export const TourList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return tours.map((tour) => (
    <Card
      tour={tour}
      btnText="Add to cart"
      btnFunction={() => addToCart(tour.id)}
    />
  ));
};
