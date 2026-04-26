import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiseLoader } from "react-spinners";
import { motion } from "framer-motion";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(time);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen relative flex-col gap-5 backdrop-blur-xl bg-white/60 dark:bg-slate-900/70 flex justify-center items-center transition-colors duration-300">
          {/* <motion.img
          initial={{
            scale:1
            , 
          }}
          whileInView={{scale:10}}
          transition={{duration:1 , delay : 0.5}}
           src={pic} className="w-[10%] rounded-full shadow-lg " alt="" /> */}

          <motion.div
            initial={{
              opacity: 0.7,
              scale: 1,
            }}
            whileInView={{ scale: 8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="opacity-70 text-[#5f5957] dark:text-slate-200 flex justify-center items-center"
          >
            <RiseLoader color="#f36a00" />
            {/* <FaCode fontSize={90} /> */}
          </motion.div>

          <h1 className="absolute bottom-5 opacity-60 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-slate-100 capitalize transition-colors duration-300">
            Welcome in My Protfoilo
          </h1>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 relative text-slate-900 dark:text-slate-100 transition-colors duration-300">
  {/* Top Fade Grid Background */}
  <div
    className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(100,116,139,0.32)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.32)_1px,transparent_1px)]"
    style={{
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />
  <div className="z-10 h-full relative pt-6">
 <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
  </div>
     
</div>
      )}
    </>
  );
}

export default App;



