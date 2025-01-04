import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { RiseLoader } from "react-spinners";
import { motion } from "framer-motion";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = setInterval(() => {
      setLoading(false);
    }, 1000);
    return () => clearInterval(time);
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="h-screen flex-col gap-5  backdrop-blur-xl bg-white/30 flex justify-center items-center">
          {/* <motion.img
          initial={{
            scale:1
            , 
          }}
          whileInView={{scale:10}}
          transition={{duration:1 , delay : 0.5}}
           src={pic} className="w-[10%] rounded-full shadow-lg " alt="" /> */}
          <h1>Welcome in My Protfoilo</h1>
          <motion.div
            initial={{
              opacity: 0.7,
              scale: 1,
            }}
            whileInView={{ scale: 10 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="opacity-70 text-[#C2410C] overflow-x-hidden flex justify-center items-center"
          >
            <FaCode fontSize={90} />
            {/* <RiseLoader color="#f36a00" /> */}
          </motion.div>
          
        </div>
      ) : (
        <>
          {" "}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
