import "./App.css";
import { Link, Route, Routes } from "react-router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Cart } from "./pages/Cart";
import { TourList } from "./pages/TourList";
import { TourInfo } from "./pages/TourInfo";


function App() {
  const queryClient = new QueryClient()

  const navItem =
    "flex items-center h-full !text-white hover:bg-blue-700 px-4 py-2 transition-colors";

  return (
    <QueryClientProvider client={queryClient}>
      <nav className="w-full bg-blue-600 shadow-md mb-[40px]">
        <ul className="flex items-center h-14 gap-6 list-none px-6 mx-auto max-w-7xl">
          <li className="h-full">
            <Link to="/" role="menuitem" className={navItem}>
              Home
            </Link>
          </li>
          <li className="h-full">
            <Link to="/cart" role="menuitem" className={navItem}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<TourList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tour/:id" element={<TourInfo />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
