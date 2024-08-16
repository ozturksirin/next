import React from "react";
import Left from "@/assets/icons/arrow-left.svg";
import Right from "@/assets/icons/arrow-right.svg";
import Image from "next/image";

type Props = {
  title: string;
};

const Seperator = (props: Props) => {
  const { title } = props;
  return (
    <div className="flex justify-between py-5">
      <p className="font-semibold text-boldTitle text-cXl">{title}</p>
      <div className="flex">
        <Image
          className="cursor-pointer"
          src={Left}
          alt="left"
          width={24}
          height={24}
        />
        <Image
          className="cursor-pointer"
          src={Right}
          alt="right"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Seperator;
