import { ActivityLinearCard, TaskCard } from "@/components";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <TaskCard />
        <div className="grow flex pl-3">
          <ActivityLinearCard />
        </div>
      </div>
      <div className="p-4">
        <p>TEST 1</p>
        <p>TEST 2</p>
        <p>TEST 3</p>
        <p>TEST 4</p>
      </div>
    </div>
  );
};

export default Dashboard;
