import React from 'react'
import { TbMathSymbols } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { RiAiGenerate2 } from "react-icons/ri";



const tagLinesIcons = [ <RiAiGenerate2 />,  <BsClipboardData /> , <TbMathSymbols /> ]

export default function TagTextBox({title , delay,id}) {
  return (
    <div className='px-2 rounded-lg  flex  mt-5 py-4  bg-white/30 backdrop-blur-md  border border-white/20 justify-start items-center shadow-md ml-1 font-normal gap-1 text-gray-500 capitalize '> {tagLinesIcons[id]}  {title}</div>
  )
}
