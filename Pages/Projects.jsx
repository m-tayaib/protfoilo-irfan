import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import ProjectShows from "../Components/ProjectShows";
import { motion } from "framer-motion";

export default function Projects() {
  const [active, setActive] = useState(0);

  const handleChangeProject = (num) => {
    setActive(num);
  };

  return (
    <section className="font-roboto  flex justify-center flex-col py-10 items-center md:h-[91vh]">
      <ProjectShows active={active} />

      {/* projects action buttons */}
      <div className="flex justify-center flex-wrap items-center mt-7 p-2 gap-4">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => handleChangeProject(0)}
          className="py-2 px-3 shadow-md group hover:bg-slate-800 hover:text-white transition-all 2s ease-linear flex justify-center items-center gap-3 bg-gray-200 rounded-lg"
        >
          CardioScop Project
          <span className="group-hover:-translate-y-2 group-hover:scale-125 group-hover:text-gray-200 transition-all 2s ease-linear">
            <MdOutlineKeyboardDoubleArrowUp />
          </span>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => handleChangeProject(1)}
          className="py-2 px-3 shadow-md group hover:bg-slate-800 hover:text-white transition-all 2s ease-linear flex justify-center items-center gap-3 bg-gray-200 rounded-lg"
        >
          AmazonMetrics Project
          <span className="group-hover:-translate-y-2 group-hover:scale-125 group-hover:text-gray-200 transition-all 2s ease-linear">
            <MdOutlineKeyboardDoubleArrowUp />
          </span>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => handleChangeProject(2)}
          className="py-2 px-3 group shadow-md hover:bg-slate-800 hover:text-white transition-all 2s ease-linear flex justify-center items-center gap-3 bg-gray-200 rounded-lg"
        >
          AppAnalyzer Project
          <span className="group-hover:-translate-y-2 group-hover:scale-125 group-hover:text-gray-200 transition-all 2s ease-linear">
            <MdOutlineKeyboardDoubleArrowUp />
          </span>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => handleChangeProject(3)}
          className="py-2 px-3 group shadow-md hover:bg-slate-800 hover:text-white transition-all 2s ease-linear flex justify-center items-center gap-3 bg-gray-200 rounded-lg"
        >
          HotelMetrics Project
          <span className="group-hover:-translate-y-2 group-hover:scale-125 group-hover:text-gray-200 transition-all 2s ease-linear">
            <MdOutlineKeyboardDoubleArrowUp />
          </span>
        </motion.button>
      </div>
    </section>
  );
}
