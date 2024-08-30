"use client";
import React, { useRef } from "react";
import Left from "@/assets/icons/arrow-left.svg";
import Right from "@/assets/icons/arrow-right.svg";
import Image from "next/image";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Seperator = ({ title, children }: Props) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="flex justify-between py-5">
        <p className="font-semibold text-boldTitle text-cXl">{title}</p>
        <div className="flex">
          <Image
            className="cursor-pointer"
            src={Left}
            alt="left"
            width={24}
            height={24}
            onClick={scrollLeft}
          />
          <Image
            className="cursor-pointer"
            src={Right}
            alt="right"
            width={24}
            height={24}
            onClick={scrollRight}
          />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide"
      >
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export default Seperator;
