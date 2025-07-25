import './App.css'
import {Link, Route, Routes} from "react-router";
import {Landing} from "./pages/Landing";
import {Cart} from "./pages/Cart";

function App() {
  const navItem = 'flex items-center h-full !text-white hover:bg-blue-700 px-4 py-2 transition-colors'

  return (
    <>
      <nav className="bg-blue-600 shadow-md mb-[40px]">
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
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
