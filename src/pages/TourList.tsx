import { Card } from "../components/Card";
import { useCartStore } from "../store/store";

export interface Tour {
  id: number;
  name: string;
  location: string;
  imgPath: string;
  description: string;
  price: number;
}

export const tours: Tour[] = [
  {
    id: 1,
    name: "Atacama Stargazing",
    location: "San Pedro de Atacama",
    imgPath: "atacama.jpg",
    description:
      "Experience breathtaking views of the Milky Way in the Atacama Desert, one of the best stargazing spots on Earth.",
    price: 120,
  },
  {
    id: 2,
    name: "Grey Lake",
    location: "Torres del Paine",
    imgPath: "greyLake.jpeg",
    description:
      "Witness the stunning turquoise waters of Grey Lake surrounded by glaciers and rugged mountain peaks.",
    price: 150,
  },
  {
    id: 3,
    name: "City and History",
    location: "Santiago",
    imgPath: "santiago.jpeg",
    description:
      "Explore Santiago's vibrant city life, historic architecture, and cultural landmarks.",
    price: 90,
  },
];

export const TourList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="flex gap-[10px] justify-center">
      {tours.map((tour) => (
        <Card
          tour={tour}
          btnText="Add to cart"
          btnFunction={() => addToCart(tour.id)}
        />
      ))}
    </div>
  );
};
