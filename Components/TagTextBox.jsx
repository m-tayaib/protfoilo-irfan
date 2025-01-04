import React from "react";
import { TbMathSymbols } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { RiAiGenerate2 } from "react-icons/ri";
import { motion } from "framer-motion";

const tagLinesIcons = [
  <RiAiGenerate2 />,
  <BsClipboardData />,
  <TbMathSymbols />,
];

export default function TagTextBox({ title, delay, id, x }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: x }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.4, delay: delay, stiffness: 120, damping: 60 }}
      className="px-2 rounded-lg flex mt-5 py-4 bg-white/30 backdrop-blur-md border border-white/20 justify-start items-center shadow-md ml-1 text-sm sm:text-base md:text-lg lg:text-xl font-normal gap-2 text-gray-500 capitalize"
    >
      <span className="text-orange-700 text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
        {tagLinesIcons[id]}
      </span>
      <span className="flex-1">{title}</span>
    </motion.div>
  );
}
