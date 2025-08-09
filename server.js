/** Simple mock server */

import express from "express";
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173'
}))

export const tours = [
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

app.get("/api/v1/tours", (req, res) => {
  res.json(tours);
});

app.listen(port, () => {
  console.log(`Simple server listening on port ${port}`);
});
