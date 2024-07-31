import { TaskCard } from "@/components";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="flex">
        <TaskCard />
      </div>
    </div>
  );
};

export default Dashboard;
