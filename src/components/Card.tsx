import { Link } from "react-router";
import type { Tour } from "../pages/TourList";

export const Card: React.FC<{
  tour: Tour;
  btnText: string;
  btnFunction: () => void;
}> = ({ tour, btnText, btnFunction }) => (
  <div className="bg-cyan-500 shadow-xl m-10 p-10">
    <img
      src={`/assets/${tour.imgPath}`}
      width="300px"
      height="200px"
      alt={tour.name}
    />
    <h2>{tour.name}</h2>
    <p>{tour.location}</p>

    <div className="flex justify-between justify-between">
      <button onClick={btnFunction}>{btnText}</button>
      <Link
        className="bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded transition-colors"
        to={`/tour/${tour.id}`}
      >
        Details
      </Link>
    </div>
  </div>
);
