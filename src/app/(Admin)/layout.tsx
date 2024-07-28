import { SideBar } from "@/components";
import Header from "@/components/layout/Header/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen grid grid-cols-12 grid-rows-[auto_1fr]">
      <div className="col-span-2 row-span-2">
        <SideBar />
      </div>
      <div className="col-span-10">
        <Header />
      </div>
      <div className="col-span-10 bg-background">{children}</div>
    </div>
  );
};

export default DashboardLayout;
