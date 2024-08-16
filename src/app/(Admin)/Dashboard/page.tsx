import {
  ActivityLinearCard,
  MentorsCard,
  Seperator,
  TaskCard,
  TaskProgresCard,
} from "@/components";
import React from "react";
import PersonOne from "@/assets/icons/photo-1.svg";
import PersonTwo from "@/assets/icons/photo-2.svg";
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

const TaskMock = [
  {
    key: "1",
    taskTitle: "Creating Mobile App Design",
    jobTitle: "UI UX Design",
    progress: 66,
    daysLeft: "2 ",
    person: [PersonOne, PersonTwo],
  },
  {
    key: "2",
    taskTitle: "Creating Perfect Website",
    jobTitle: "Web Developer",
    progress: 81,
    daysLeft: "4 ",
    person: [PersonTwo, PersonOne],
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
      <div>
        <Seperator title="Monthly Mentors" />

        <div className="flex mt-4 mb-4">
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

      <div>
        <Seperator title="Upcoming Task" />
        <div className="flex">
          {TaskMock.map((task) => {
            return (
              <TaskProgresCard
                key={task.key}
                taskTitle={task.taskTitle}
                jobTitle={task.jobTitle}
                progress={task.progress}
                daysLeft={task.daysLeft}
                person={task.person}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
