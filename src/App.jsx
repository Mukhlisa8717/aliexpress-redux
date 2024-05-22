import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Wishlist from "./pages/wishlist/Wishlist"
import Cart from "./pages/cart/Cart"
import "./App.css";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/wishlist' element={<Wishlist />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </>
  )
}

export default App
