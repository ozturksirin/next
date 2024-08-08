import React from "react";
import Left from "@/assets/icons/arrow-left.svg";
import Right from "@/assets/icons/arrow-right.svg";
import Image from "next/image";

type Props = {};

const Seperator = (props: Props) => {
  return (
    <div className="flex justify-between">
      <p className="font-semibold text-boldTitle text-cXl">Monthly Mentors</p>
      <div className="flex">
        <Image src={Left} alt="left" width={24} height={24} />
        <Image src={Right} alt="right" width={24} height={24} />
      </div>
    </div>
  );
};

export default Seperator;
