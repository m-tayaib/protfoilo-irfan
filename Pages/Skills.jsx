import python from "../public/python.png";
import machine from "../public/machine.png";
import deep from "../public/deep.png";
import powerbi from "../public/powerbi.png";
import exploratory from "../public/exploratory.png";
import visualization from "../public/visualization.png";
import { motion } from "framer-motion";
import fire from "../public/fire.gif";

const skills = [
  {
    id: 1,
    title: "Python Programming",
    para: "Transforming data into actionable insights through efficient Python programming.",
    icon: <img src={python} alt="python" />,
  },
  {
    id: 2,
    title: "Machine Learning Solutions",
    para: "Building predictive models to enhance decision-making processes.",
    icon: <img src={machine} alt="machine" />,
  },
  {
    id: 3,
    title: "Deep Learning Applications",
    para: "Designing intelligent systems for advanced data analysis and automation.",
    icon: <img src={deep} alt="deep" />,
  },
  {
    id: 4,
    title: "Power BI Dashboards",
    para: "Creating dynamic visualizations to drive data-driven business strategies.",
    icon: <img src={powerbi} alt="powerbi" />,
  },
  {
    id: 5,
    title: "Exploratory Data Analysis",
    para: "Uncovering trends and patterns in data to provide meaningful insights.",
    icon: <img src={exploratory} alt="exploratory" />,
  },
  {
    id: 6,
    title: "Data Visualization",
    para: "Presenting complex data through intuitive and impactful visual storytelling.",
    icon: <img src={visualization} alt="visualization" />,
  },
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
    text: "In the world of data, patterns speak louder than assumptions—let me help you uncover them."
  },
  {
    id: 2,
    text: "Empowering businesses with the tools to transform raw data into strategic decisions."
  },
  {
    id: 3,
    text: "Deep learning isn't just about algorithms; it's about unlocking the future of possibilities."
  },
  {
    id: 4,
    text: "Every dataset holds untapped potential—together, we can bring it to life."
  },
  {
    id: 5,
    text: "From insights to innovation, let your data drive a smarter tomorrow."
  },
  {
    id: 6,
    text: "Bridging the gap between data and decisions with precision and expertise."
  },
  {
    id: 7,
    text: "Transforming raw numbers into stories that fuel growth and innovation."
  },
  {
    id: 8,
    text: "Your data deserves a voice—let's amplify it with actionable insights."
  },
  {
    id: 9,
    text: "Unveiling the power of data to shape intelligent business strategies."
  },
  {
    id: 10,
    text: "Harnessing machine learning to solve today’s challenges and build tomorrow’s success."
  },
  {
    id: 11,
    text: "When data meets creativity, extraordinary solutions emerge."
  },
  {
    id: 12,
    text: "Every dataset is a puzzle—I bring the pieces together with clarity."
  },
  {
    id: 13,
    text: "Turning chaos into clarity with the art and science of data analysis."
  },
  {
    id: 14,
    text: "Deep insights come from deep learning—let's explore what your data can reveal."
  },
  {
    id: 15,
    text: "Crafting visual narratives that make complex data simple and actionable."
  },
  {
    id: 16,
    text: "Your data’s true potential is just a question away—ask the right one with me."
  },
  {
    id: 17,
    text: "Power BI dashboards that not only inform but inspire action."
  },
  {
    id: 18,
    text: "Numbers have stories—let's ensure yours are worth telling."
  },
  {
    id: 19,
    text: "Where numbers become insights, and insights become impact."
  },
  {
    id: 20,
    text: "Advanced analytics for smarter decisions and stronger outcomes."
  },
  {
    id: 21,
    text: "Empowering organizations to lead with data-driven confidence."
  },
  {
    id: 22,
    text: "From predictive models to actionable insights—your data’s journey starts here."
  },
  {
    id: 23,
    text: "Intelligence is in the details—let's explore yours through data."
  },
  {
    id: 24,
    text: "Data-driven success isn’t a trend; it’s a strategy for the future."
  },
  {
    id: 25,
    text: "Your business has questions; your data has answers—let’s connect the dots."
  },
  {
    id: 26,
    text: "Exploratory data analysis that reveals trends and fuels transformation."
  },
  {
    id: 27,
    text: "Building bridges between raw data and informed decisions."
  },
  {
    id: 28,
    text: "When innovation meets insights, success is inevitable."
  },
  {
    id: 29,
    text: "Strategic solutions powered by data science and creativity."
  },
  {
    id: 30,
    text: "Unlocking the hidden gems in your data for maximum impact."
  }
];

function generateRandomNumber() {
  return Math.floor(Math.random() * 30); // Generates a number between 0 and 5
}

export default function Skills() {
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
    <section className="font-roboto overflow-x-hidden ">
      <div className="container">
        {/* skills portion */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3  grid-cols-1 gap-5 mt-9"
        >
          {skills.map((skill) => {
            return (
              <motion.div
                variants={item}
                className="flex  cursor-pointer mx-auto  hover:bg-black hover:text-white transition-all 4s ease-linear flex-col gap-3     border-[0.5px] border-[black] p-3 md:w-[400px] w-[300px] rounded-md"
              >
                <h1 className="flex  items-center gap-2 text-lg pt-2 font-bold">
                  {skill.icon} {skill.title}
                </h1>
                <p className=" p-2 rounded-md text-[15px] "> {skill.para}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="container px-3 pb-3 grid grid-cols-1 md:grid-cols-2  ">
          <div>
            <h1 className="text-2xl font-bold container  mt-9">
              How I Can Assist You
            </h1>
            <ol className="flex  flex-col  gap-2 ">
              {steps.map((step) => {
                return (
                  <motion.li
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
        </div>
      </div>
    </section>
  );
}
