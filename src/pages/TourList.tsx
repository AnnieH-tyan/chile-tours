import { Card } from "../components/Card";

const tours = [
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
  return tours.map((tour) => (
    <Card key={tour.id}>
      <img
        src={`/assets/${tour.imgPath}`}
        width="300px"
        height="200px"
        alt={tour.name}
      />
      <h2>{tour.name}</h2>
      <p>{tour.location}</p>
    </Card>
  ));
};
