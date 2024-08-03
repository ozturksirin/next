import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Task from "@/assets/icons/task-note.svg";
import Star from "@/assets/icons/Star.svg";

type Props = {
  name?: string;
  job?: string;
  task?: string;
  reviews?: string;
  rate?: string;
  image?: string;
  follow?: boolean;
};

const MentorsCard = (props: Props) => {
  const { name, job, task, reviews, rate, image, follow } = props;
  return (
    <React.Fragment>
      <Card className="min-w-80	min-h-36 bg-white border-none p-5 mr-8">
        <CardContent className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={image}
              alt="mentors-image"
              className="rounded-full w-16"
            />
            <AvatarFallback className="w-16 h-16">MT</AvatarFallback>
          </Avatar>
          <div className="flex gap-6 items-center">
            <div className="flex flex-col">
              <p className="text-secondary font-bold text-base">{name}</p>
              <p className="text-[#54577A] text-xs">{job}</p>
            </div>
            {follow ? (
              <span className="text-[#546FFF] cursor-pointer text-cSm">
                + Follow
              </span>
            ) : (
              <span className="text-[#54577A] cursor-pointer text-cSm">
                Followed
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="items-center justify-between">
          <div className="flex">
            <Image src={Task} alt="Task" />
            <p>{task} Task</p>
          </div>
          <div className="flex">
            <Image src={Star} alt="Star" />
            <p>
              {`${rate} `} {`(${reviews} Reviews)`}
            </p>
          </div>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};

export default MentorsCard;
