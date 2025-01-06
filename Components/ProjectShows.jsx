import React from "react";
import heart_diease from "../public/projects_images/heart_dieases.png";
import amazon_project from "../public/projects_images/amazon_project.png";
import appStore from "../public/projects_images/appStore.png";
import hotel_project from "../public/projects_images/hotel_project.png";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";

const projectData = [
  {
    id: 0,
    title: "Heart Disease Pridiction",
    para: "Explored heart disease patterns through machine learning, analyzing factors like age, chest pain, and cholesterol. Implemented diverse algorithms for accurate predictions. Grateful for the dataset from Hungarian Institute of Cardiology and others.",
    img: heart_diease,
    github: "https://github.com/irfan5006/Machine_Learning_Project06",
    tags: [
      "EDA",
      "Statistical Data Analysis",
      "Data Visualization",
      "Data Analysis",
      "Machine Learning",
      "Data Cleaning",
    ],
  },
  {
    id: 1,
    title: "Amazon Sales Performance Analysis",
    para: "Explore Amazon's sales dataset with a focus on data analysis and EDA. Uncover trends, customer sentiment, and pricing strategies. Inform data-driven decisions for revenue growth in the e-commerce landscape.",
    img: amazon_project,
    github: "https://github.com/irfan5006/Amazon_Sale_Analysis_EDA",
    tags: [
      "Problem Solving",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning · pandas",
      "Hypothesis Testing",
      "Data Science",
    ],
  },
  {
    id: 2,
    title: "Exploratory Data Analysis of Google Play Store Apps Data",
    para: "Dive into the dynamic world of mobile apps with our Google Play Store Data Analysis project. We've meticulously examined a rich dataset of Android apps to uncover fascinating insights. Explore app categories, user ratings, download trends, and more. Our visualizations bring the data to life, providing valuable perspectives on the mobile app ecosystem. Join us on this journey as we unveil the secrets behind your favorite apps.",
    img: appStore,
    github: "https://github.com/irfan5006/Google_Play_store-_App-_analysis",
    tags: [
      "Market Analysis",
      "Data Science",
      "Numpay",
      "Data Preparation",
      "DataViz",
      "Jupyter Notebook",
    ],
  },
  {
    id: 3,
    title: "Hotel Booking Analysis",
    para: "Explored hotel booking data , unveiling occupancy rates , booking patterns , and customer preferences . Insights inform optimal hotel operations  and marketing strategies ",
    img: hotel_project,
    github: "https://github.com/irfan5006/Hotel_Booking_Analysis_Project",
    tags: [
      "Data Visualization (DataViz)",
      "Data Analysis",
      "Jupyter Notebook",
      "Data Cleaning · pandas",
      "Problem Solving",
      "Data Science",
    ],
  },
];

export default function ProjectShows({ active }) {
  return (
    <div className="container grid md:grid-cols-2 gap-2 grid-cols-1">
      {/* project info  */}
      <div className="mt-12 md:p-0 p-5">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-xl md:text-5xl tracking-medium    font-extrabold mb-2"
        >
          {projectData[active].title}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-gray-500 tracking-tighter leading-6 mb-4"
        >
          {projectData[active].para}
        </motion.p>

        {/* skills used in projects  */}
        <div className="">
          <ul className="flex  flex-wrap items-center gap-3">
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
              className="bg-gray-300 text-black py-2 px-3 shadow-md rounded-md inline-block"
            >
              {projectData[active].tags[0]}
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="bg-gray-300 text-black py-2 px-3 shadow-md rounded-md inline-block"
            >
              {projectData[active].tags[1]}
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              className="bg-gray-300 text-black py-2 px-3 shadow-md rounded-md inline-block"
            >
              {projectData[active].tags[2]}
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              className="bg-gray-300 text-black py-2 px-3 shadow-md rounded-md inline-block"
            >
              {projectData[active].tags[3]}
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              className="bg-gray-300 text-black py-2 px-3 shadow-md rounded-md inline-block"
            >
              {projectData[active].tags[4]}
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
              className="bg-gray-300 text-black py-2 px-3 shadow-md rounded-md inline-block"
            >
              {projectData[active].tags[5]}
            </motion.li>
          </ul>
        </div>

        {/* project views points links */}
        <div className="flex gap-3 mt-5  float-right">
          <a href={projectData[active].github}>
            <motion.button
              initial={{ opacity: 0, scale: 0.7}}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: "easeInOut",
                stiffness: 100,
                damping: 160,
              }}
              className="py-2 px-3 shadow-md hover:bg-green-600 hover:text-white font-bold transition-all 2s ease-linear flex justify-center items-center gap-3 bg-gray-200 rounded-lg"
            >
              code
              <FaCode />
            </motion.button>
          </a>
        </div>
      </div>

      {/* project images */}
      <div className="relative flex justify-center  items-center ">
        <motion.div 
        initial={{ opacity: 0, scale: 0.7 , rotate: 45 , x: -50   }}
        whileInView={{ opacity: 1, scale: 1 , rotate: -2 , x: 0   }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        className="h-[80%] w-[82%] rounded-md absolute rotate-3 -z-10 bg-gray-600 shadow-md "></motion.div>
        <motion.img
          
          initial={{ opacity: 0, scale: 0.7 , rotate: 45 , x: -50   }}
whileInView={{ opacity: 1, scale: 1 , rotate: 0 , x: 0   }}
transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}

         className="shadow-[0_0_4px_black] h-[80%] w-[80%] rounded-md "
          src={projectData[active].img}
          alt=""
        />
      </div>
    </div>
  );
}
