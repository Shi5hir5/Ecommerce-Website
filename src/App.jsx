import Navbar from "./components/Navbar"
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
import Register from "./Pages/Register"
import Footer from "./components/Footer"
import About from "./Pages/About"
import Contact from "./Pages/Contact"



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login/register" element={<Register/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
