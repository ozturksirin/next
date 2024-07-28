import { SideBar } from "@/components";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
