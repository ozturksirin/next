import { SideBar } from "@/components";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 ">
        <SideBar />
      </div>
      <div className="col-span-10 ">
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
