import { useState } from "react";

import rightArrowDark from "../assets/right-arrow-dark.png";
import upArrowWhite from "../assets/up-arrow-white.png";

type AccordionProps = {
  title: string;
  answer: string;
};

const Accordion = ({ title, answer }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`py-5 px-6 border border-[#EBEBEB] shadow-inner ${
        accordionOpen ? "bg-[#EBEBEB]" : "bg-white"
      }`}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <span
          className={`${
            accordionOpen ? "text-[#23A6F0]" : "text-[#252B42]"
          } text-base leading-6 font-bold tracking-wide`}
        >
          {title}
        </span>
        <div
          className={`w-8 h-8  rounded-full flex items-center justify-center shadow-md ${
            accordionOpen ? "bg-[#23A6F0]" : "border border-[#D3D3D3]"
          }`}
        >
          {accordionOpen ? (
            <img src={upArrowWhite} alt="up arrow icon" />
          ) : (
            <img src={rightArrowDark} alt="right arrow icon" />
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-[30px] text-black font-medium text-base leading-[26px] tracking-wide">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
