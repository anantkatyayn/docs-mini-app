import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1, backgroundColor: "#64748B" }} dragTransition={{ bounceStiffness:200}} className="relative flex-shrink-0 w-60 h-72 rounded-[60px] bg-gray-900/50 text-gray-300 overflow-hidden py-10 px-8">
      <FaRegFileAlt />
      <p className="text-sm font-regular mt-4 leading-tight ">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-centre justify-between mb-3 py-3 px-8">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-slate-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose size="0.8em" color="#fff" />
            ) : (
              <LuDownload size="0.8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div className={`tag group w-full py-5 bg-green-600 hover:bg-green-500 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold group-hover:font-bold">{data.tag.tagTitle}</h3>
          </div>
        ) : <div className={`tag group w-full py-5 bg-blue-600 hover:bg-blue-500 flex items-center justify-center `}>
        <h3 className="text-sm font-semibold group-hover:font-bold">{data.tag.tagTitle}</h3>
      </div>}
      </div>
    </motion.div>
  );
};

export default Card;
