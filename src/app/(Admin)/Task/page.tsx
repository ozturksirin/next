"use client";
import React from "react";
import { Seperator, TaskProgresCard } from "@/components";
import { TaskData } from "@/data/task";

type Props = {};

const page = (props: Props) => {
  const { timeLimit, newTask } = TaskData;
  return (
    <div>
      <div>Search Input</div>
      <Seperator title="Time Limit">
        {timeLimit.map((task) => (
          <TaskProgresCard
            key={task.key}
            taskTitle={task.taskTitle}
            jobTitle={task.jobTitle}
            progress={task.progress}
            daysLeft={task.daysLeft}
            image={task.image}
            person={task.person?.map((person) => person) || []}
          />
        ))}
      </Seperator>
      <Seperator title="New Task">
        {newTask.map((task) => (
          <TaskProgresCard
            key={task.key}
            taskTitle={task.taskTitle}
            jobTitle={task.jobTitle}
            progress={task.progress}
            daysLeft={task.daysLeft}
            image={task.image}
            person={task.person?.map((person) => person) || []}
          />
        ))}
      </Seperator>
    </div>
  );
};

export default page;
