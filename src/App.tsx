import './App.css'
import {Link, Route, Routes} from "react-router";
import {Landing} from "./pages/Landing";
import {Cart} from "./pages/Cart";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" role="menuitem">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" role="menuitem">
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
