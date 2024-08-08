"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Task from "@/assets/images/task-image.png";
import { Progress } from "@/components/ui/progress";
import Timer from "@/assets/icons/time-circle.svg";

type Props = {
  taskTitle?: string;
  jobTitle?: string;
  progress?: number;
  daysLeft?: string;
  person?: string[];
};

const TaskProgresCard = (props: Props) => {
  const { taskTitle, jobTitle, progress, daysLeft, person } = props;

  return (
    <React.Fragment>
      <Card className="bg-white rounded-lg max-w-80	border-none mr-8">
        <CardHeader>
          <Image src={Task} alt="task" width={280} height={110} />
          <div className="pt-2">
            <p className="text-boldTitle font-semibold text-base ">
              {taskTitle}
            </p>
            <p className="text-[#54577A] font-normal text-xs">{jobTitle}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between pb-4">
            <p className="text-boldTitle font-normal text-base">Progress</p>
            <span className="text-[#546FFF] font-normal text-base">{`${progress}%`}</span>
          </div>
          <Progress
            value={progress}
            className="w-[100%] bg-[#BAC8FF]"
            indicatorColor="bg-[#546FFF]"
          />
        </CardContent>
        <CardFooter>
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <Image src={Timer} alt="timer" />
              <p className="text-boldTitle font-normal text-base pl-2">
                {`${daysLeft}days left`}
              </p>
            </div>
            <div className="flex">
              {person?.map((people, index) => (
                <Image
                  key={index}
                  src={people}
                  alt={`Person ${index}`}
                  className="ml-auto"
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};

export default TaskProgresCard;
