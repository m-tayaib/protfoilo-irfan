import python from "../public/python.png";
import machine from "../public/machine.png";
import deep from "../public/deep.png";
import powerbi from "../public/powerbi.png";
import exploratory from "../public/exploratory.png";
import visualization from "../public/visualization.png";
import { useState } from "react";
import { motion } from "framer-motion";
import fire from "../public/fire.gif";
import { OrbitingCirclesDemo } from "../src/components/ui/OrbitingCirclesDemo";

const skills = [
  {
    id: 1,
    title: "Python Programming",
    para: "Transforming raw data into actionable insights through efficient Python programming and object-oriented techniques.",
    icon: <img src={python} alt="python" />,
    orbitOuter: ["python", "jupyter", "pandas", "numpy", "sklearn"],
    orbitInner: ["fastapi", "openai", "sheets", "sql"],
  },
  {
    id: 2,
    title: "Machine Learning Solutions",
    para: "Building and evaluating predictive models, such as KNN for Heart Disease Prediction and Linear Regression for Insurance Charges Prediction, using Scikit-learn with metrics like F1-score and R2.",
    icon: <img src={machine} alt="machine" />,
    orbitOuter: ["sklearn", "python", "spark", "pandas", "plotly"],
    orbitInner: ["jupyter", "openai", "numpy", "sql"],
  },
  {
    id: 3,
    title: "Deep Learning & Medical AI",
    para: "Designing medical image classification systems and improving model interpretability using TensorFlow and Grad-CAM.",
    icon: <img src={deep} alt="deep" />,
    orbitOuter: ["tensorflow", "python", "openai", "numpy", "jupyter"],
    orbitInner: ["sklearn", "pandas", "plotly", "fastapi"],
  },
  {
    id: 4,
    title: "High-Performance APIs",
    para: "Architecting and deploying robust backend services and integration layers with FastAPI for high-performance ML workflows.",
    icon: <img src={powerbi} alt="powerbi" />,
    orbitOuter: ["fastapi", "python", "sql", "spark", "openai"],
    orbitInner: ["jupyter", "sheets", "powerbi", "numpy"],
  },
  {
    id: 5,
    title: "Interactive Web Applications",
    para: "Deploying real-time prediction interfaces and data-driven dashboards using Streamlit and Dash.",
    icon: <img src={powerbi} alt="powerbi" />,
    orbitOuter: ["streamlit", "dash", "plotly", "powerbi", "python"],
    orbitInner: ["pandas", "numpy", "sql", "openai"],
  },
  {
    id: 6,
    title: "Exploratory Data Analysis",
    para: "Uncovering critical trends and cleaning complex healthcare datasets using Pandas, NumPy, and Microsoft Excel.",
    icon: <img src={exploratory} alt="exploratory" />,
    orbitOuter: ["pandas", "numpy", "jupyter", "powerbi", "sheets"],
    orbitInner: ["python", "plotly", "sql", "openai"],
  }
];
const steps = [
  { title: "Turning raw data into actionable strategies.", delay: 0.3, x: 100 },
  {
    title: "Enhancing decision-making with machine learning.",
    delay: 0.6,
    x: -100,
  },
  { title: "Unlocking insights through deep learning.", delay: 0.9, x: 100 },
  {
    title: "Creating dynamic dashboards for business strategies.",
    delay: 1.2,
    x: -100,
  },
  { title: "Unveiling trends and patterns in data.", delay: 1.5, x: 100 },

  {
    title: "Turning raw data into actionable strategies.",
    delay: 1.7,
    x: -100,
  },
];

const quotes = [
  {
    id: 1,
    text: "In the world of data, patterns speak louder than assumptions—let me help you uncover them.",
  },
  {
    id: 2,
    text: "Empowering businesses with the tools to transform raw data into strategic decisions.",
  },
  {
    id: 3,
    text: "Deep learning isn't just about algorithms; it's about unlocking the future of possibilities.",
  },
  {
    id: 4,
    text: "Every dataset holds untapped potential—together, we can bring it to life.",
  },
  {
    id: 5,
    text: "From insights to innovation, let your data drive a smarter tomorrow.",
  },
  {
    id: 6,
    text: "Bridging the gap between data and decisions with precision and expertise.",
  },
  {
    id: 7,
    text: "Transforming raw numbers into stories that fuel growth and innovation.",
  },
  {
    id: 8,
    text: "Your data deserves a voice—let's amplify it with actionable insights.",
  },
  {
    id: 9,
    text: "Unveiling the power of data to shape intelligent business strategies.",
  },
  {
    id: 10,
    text: "Harnessing machine learning to solve today’s challenges and build tomorrow’s success.",
  },
  {
    id: 11,
    text: "When data meets creativity, extraordinary solutions emerge.",
  },
  {
    id: 12,
    text: "Every dataset is a puzzle—I bring the pieces together with clarity.",
  },
  {
    id: 13,
    text: "Turning chaos into clarity with the art and science of data analysis.",
  },
  {
    id: 14,
    text: "Deep insights come from deep learning—let's explore what your data can reveal.",
  },
  {
    id: 15,
    text: "Crafting visual narratives that make complex data simple and actionable.",
  },
  {
    id: 16,
    text: "Your data’s true potential is just a question away—ask the right one with me.",
  },
  {
    id: 17,
    text: "Power BI dashboards that not only inform but inspire action.",
  },
  {
    id: 18,
    text: "Numbers have stories—let's ensure yours are worth telling.",
  },
  {
    id: 19,
    text: "Where numbers become insights, and insights become impact.",
  },
  {
    id: 20,
    text: "Advanced analytics for smarter decisions and stronger outcomes.",
  },
  {
    id: 21,
    text: "Empowering organizations to lead with data-driven confidence.",
  },
  {
    id: 22,
    text: "From predictive models to actionable insights—your data’s journey starts here.",
  },
  {
    id: 23,
    text: "Intelligence is in the details—let's explore yours through data.",
  },
  {
    id: 24,
    text: "Data-driven success isn’t a trend; it’s a strategy for the future.",
  },
  {
    id: 25,
    text: "Your business has questions; your data has answers—let’s connect the dots.",
  },
  {
    id: 26,
    text: "Exploratory data analysis that reveals trends and fuels transformation.",
  },
  {
    id: 27,
    text: "Building bridges between raw data and informed decisions.",
  },
  {
    id: 28,
    text: "When innovation meets insights, success is inevitable.",
  },
  {
    id: 29,
    text: "Strategic solutions powered by data science and creativity.",
  },
  {
    id: 30,
    text: "Unlocking the hidden gems in your data for maximum impact.",
  },
];

function generateRandomNumber() {
  return Math.floor(Math.random() * 30); // Generates a number between 0 and 5
}

export default function Skills() {
  const [selectedSkillId, setSelectedSkillId] = useState(skills[0].id);
  const selectedSkill =
    skills.find((skill) => skill.id === selectedSkillId) ?? skills[0];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 1.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="font-roboto  h-full  overflow-x-hidden transition-colors duration-300">
      <div className="container mx-auto ">
        {/* skills portion */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid  lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-5 mt-9"
        >
          {skills.map((skill) => {
            const isSelected = skill.id === selectedSkillId;

            return (
              <motion.div
                key={skill.id}
                variants={item}
                onClick={() => setSelectedSkillId(skill.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedSkillId(skill.id);
                  }
                }}
                className={`flex cursor-pointer mx-auto flex-col gap-3 border p-3 md:w-[400px] w-[300px] rounded-md transition-colors duration-300 ease-out ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-[0_14px_30px_rgba(15,23,42,0.25)] dark:bg-slate-100 dark:text-slate-900 dark:border-slate-200"
                    : "border-slate-900/70 dark:border-slate-600 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900"
                }`}
              >
                <h1 className="flex  items-center gap-2 text-lg pt-2 font-bold">
                  {skill.icon} {skill.title}
                </h1>
                <p className=" p-2 rounded-md text-[15px] "> {skill.para}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* <div className="container px-3 pb-3 grid grid-cols-1 md:grid-cols-2  ">
          <div>
            <h1 className="text-2xl font-bold container  mt-9">
              How I Can Assist You
            </h1>
            <ol className="flex  flex-col  gap-2 ">
              {steps.map((step , index) => {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, x: step.x }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: step.delay,
                      stiffness: 120,
                      damping: 60,
                    }}
                    className="text-md sm:text-lg md:text-xl ml-1 leading-7 flex gap-2"
                  >
                    <span className="font-bold">{"\u2022"}</span> {step.title}
                  </motion.li>
                );
              })}
            </ol>
          </div>

          <div className="flex justify-center  items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                stiffness: 120,
                damping: 60,
              }}
              src={fire}
              className="w-[70px] rounded-full "
              alt="fire_logo"
            />
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                stiffness: 120,
                damping: 60,
              }}
              className="italic font-extrabold text-lg tracking-tighter "
            >
              ''{quotes[generateRandomNumber()].text}''
            </motion.h1>
          </div>
        </div> */}


        {/* orbital animation show  */}

      <OrbitingCirclesDemo
        title={selectedSkill.title}
        outerIcons={selectedSkill.orbitOuter}
        innerIcons={selectedSkill.orbitInner}
      />



      </div>
    </section>
  );
}
