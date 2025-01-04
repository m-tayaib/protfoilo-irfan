import React from "react";
import python from "../public/python.png";
import machine from "../public/machine.png";
import deep from "../public/deep.png";
import powerbi from "../public/powerbi.png";
import exploratory from "../public/exploratory.png";
import visualization from "../public/visualization.png";

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
const tools = [
  {
    id: 1,
    title: "GPT (Generative Pre-trained Transformers)",
    para: "A powerful language model for text generation, natural language processing, and conversational AI, useful for automating tasks and generating insights from textual data.",
  },
  {
    id: 2,
    title: "Jupyter Notebook",
    para: "A popular tool for data science and machine learning that allows you to create and share documents containing live code, equations, visualizations, and narrative text.",
  },
  {
    id: 3,
    title: "Pandas",
    para: "A Python library widely used for data manipulation and analysis, essential for working with structured data and performing tasks like data cleaning and transformation.",
  },
  {
    id: 4,
    title: "NumPy",
    para: "A core library for numerical operations in Python, providing efficient array operations and mathematical functions for data science and machine learning tasks.",
  },
  {
    id: 5,
    title: "Tableau",
    para: "A leading data visualization tool that allows you to create interactive and shareable dashboards, enabling businesses to make data-driven decisions.",
  },
  {
    id: 6,
    title: "TensorFlow or PyTorch",
    para: "Deep learning frameworks that allow you to build and deploy complex machine learning models, particularly used in tasks like computer vision, NLP, and recommendation systems.",
  },
];

export default function Skills() {
  return (
    <section className="font-roboto ">
      <div className="container">
        {/* skills portion */}
        <div className="flex flex-wrap justify-center gap-5 mt-9">
          {skills.map((skill) => {
            return (
              <div className="flex hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),_0_3px_6px_rgba(0,0,0,0.23)] cursor-wait transition-all 2s ease-linear flex-col gap-3 border-[0.7px] shadow-lg p-3 w-[300px] rounded-md">
                <h1 className="flex  items-center gap-2 text-lg pt-2 font-bold">
                  {skill.icon} {skill.title}
                </h1>
                <p className=" p-2 rounded-md text-[15px] "> {skill.para}</p>
              </div>
            );
          })}
        </div>

        {/* tools portion */}
        {/* <div>
    {tools.map((tool) => {
      return (
        <div>
          <h1 className=''>
            
            {tool.title}</h1>
          <p>{tool.para}</p>
          
        </div>
      );
    })}
    </div> */}
      </div>
    </section>
  );
}
