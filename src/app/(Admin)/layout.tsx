"use client";
import { SideBar } from "@/components";
import Header from "@/components/layout/Header/Header";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const user: string = "Skylar Dias";

  const handlerouteName = () => {
    if (pathname === "/Dashboard") {
      return `Hi, ${user}`;
    }
    if (pathname === "/Task") {
      return "Explore Task";
    }
    if (pathname === "/Mentors") {
      return "Explore Mentors";
    } else {
      return pathname.replace("/", "");
    }
  };

  const handleSubTitle = () => {
    if (pathname === "/Dashboard") {
      return `Let's finish your task today!`;
    }
  };

  useEffect(() => {
    handlerouteName();
  }, [pathname]);

  return (
    <div className="min-h-screen grid grid-cols-12 grid-rows-[auto_1fr]">
      <div className="col-span-2 row-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 px-6">
        <Header
          title={handlerouteName()}
          subTitle={handleSubTitle()}
          image="https://github.com/shadcn.png"
        />
      </div>
      <div className="col-span-10 bg-background px-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
