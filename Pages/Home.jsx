import pic from "../public/irfan.jpeg";
import underline from "../public/Decore.png";
import { Link } from "react-router";
import TagTextBox from "../Components/TagTextBox";
import { motion } from "framer-motion";

const Taglines = [
  {
    id: 0,
    title: "Data Science Trainee | Proficient in Python & Machine Learning",
    delay: 0.3,
    x: 100,
  },
  {
    id: 1,
    title: "Data Analyst | Expert in Uncovering Insights from Complex Data",
    delay: 0.6,
    x: -100,
  },
  {
    id: 2,
    title: "Math Scholar | IBM-Certified Data Scientist | Innovator",
    delay: 0.9,
    x: 100,
  },
];

export default function Home() {
  return (
    <section className="container  font-roboto grid md:grid-cols-2 justify-center items-center gap-5 md:h-[91vh] overflow-x-hidden">
      {/* Person Info */}
      <div className="p-5 md:p-0">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, stiffness: 120, damping: 60 }}
          className="relative ml-1 text-3xl sm:text-4xl md:text-6xl font-bold capitalize pb-5"
        >
          Muhammad Irfan
          <img
            className="absolute bottom-5 w-[50%] -rotate-[5deg] right-10"
            src={underline}
            alt="underline"
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, stiffness: 120, damping: 60 }}
          className="text-md sm:text-lg md:text-xl ml-1 leading-7"
        >
          I am a data professional skilled in <strong>Python</strong>,{" "}
          <strong>Machine Learning</strong>, and <strong>analytics</strong>,
          with a strong foundation in mathematics and a proven track record of
          delivering data-driven insights.
        </motion.p>

        {Taglines.map((tagline) => {
          return (
            <TagTextBox
              key={tagline.id}
              id={tagline.id}
              title={tagline.title}
              delay={tagline.delay}
              x={tagline.x}
            />
          );
        })}

        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, stiffness: 120, damping: 60 }}
            className="bg-black transition-all 2s ease-in  hover:translate-x-5  hover:text-black hover:bg-white shadow-[0_0_5px_black] ml-1 border-[0.7px] border-[#000000] text-white p-3 rounded-lg mt-5"
          >
            Let's Connect
          </motion.button>
        </Link>
      </div>

      {/* Person Pic */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.4, stiffness: 120, damping: 150 }}
        className="container flex justify-center items-center"
      >
        <img className="img shadow-[0_0_20px_black]" src={pic} alt="image" />
      </motion.div>
    </section>
  );
}
