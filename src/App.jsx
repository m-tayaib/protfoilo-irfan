import Home from "../Pages/Home"
import Navbar from "../Components/Navbar"
import About from "../Pages/About"
import Projects from "../Pages/Projects"
import Contact from "../Pages/Contact"
import {Routes , Route} from "react-router-dom"

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes > 
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
