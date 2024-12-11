"use client";
import { SideBar } from "@/components";
import Header from "@/components/layout/Header/Header";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  overviewChildren?: React.ReactNode;
};

const uri = "https://avatars.githubusercontent.com/u/92751534?v=4";

const DashboardLayout = (props: Props) => {
  const { children, overviewChildren } = props;
  const pathname = usePathname();
  const user: string = "Skylar Dias";

  const handlerouteName = () => {
    switch (pathname) {
      case "/Dashboard":
        return `Hi, ${user}`;
      case "/Task":
        return "Explore Task";
      case "/Mentors":
        return "Explore Mentors";
      default:
        return pathname.replace("/", "");
    }
  };

  const handleSubTitle = () => {
    if (pathname === "/Dashboard") {
      return `Let's finish your task today!`;
    }
    return "";
  };

  useEffect(() => {
    handlerouteName();
  }, [pathname]);

  return (
    <div className="min-h-screen grid grid-cols-12 grid-rows-[auto_1fr]">
      <div className="col-span-2 row-span-2">
        <SideBar />
      </div>
      {pathname === "/Dashboard" ? (
        <>
          <div className="col-span-7 px-6">
            <Header
              title={handlerouteName()}
              subTitle={handleSubTitle()}
              image={uri}
            />
            <div className="bg-background mt-6">{children}</div>
          </div>

          <div className="col-span-5 px-8">
            <div className="p-4 bg-background h-full">{overviewChildren}</div>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-10 px-6">
            <Header
              title={handlerouteName()}
              subTitle={handleSubTitle()}
              image={uri}
            />
          </div>
          <div className="col-span-10 bg-background px-6">{children}</div>
        </>
      )}
    </div>
  );
};
export default DashboardLayout;
