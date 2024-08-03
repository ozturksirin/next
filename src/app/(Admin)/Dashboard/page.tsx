import { ActivityLinearCard, MentorsCard, TaskCard } from "@/components";
import React from "react";

type Props = {};

const MentorsMock = [
  {
    key: "1",
    name: "Öztürk Şirin",
    job: "Software Developer",
    task: "5",
    reviews: "5",
    rate: "3.9",
    image: "https://avatars.githubusercontent.com/u/92751534?v=4",
    follow: true,
  },
  {
    key: "2",
    name: "Mentor Name",
    job: "Job Title",
    task: "10",
    reviews: "5",
    rate: "4.5",
    image:
      "https://pbs.twimg.com/profile_images/1782188004552974337/NuiTv7CJ_400x400.jpg",
    follow: false,
  },
];

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <TaskCard />
        <div className="grow flex pl-3">
          <ActivityLinearCard />
        </div>
      </div>
      <div className="flex mt-4">
        {MentorsMock.map((mentor) => {
          return (
            <MentorsCard
              key={mentor.key}
              name={mentor.name}
              job={mentor.job}
              task={mentor.task}
              reviews={mentor.reviews}
              rate={mentor.rate}
              image={mentor.image}
              follow={mentor.follow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
