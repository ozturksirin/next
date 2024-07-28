import React from "react";
import Notification from "@/assets/icons/Notification.svg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const Header = (props: Props) => {
  return (
    <React.Fragment>
      <div className="flex justify-between p-6">
        <div>
          <p className="text-textXl font-semibold text-boldTitle">
            Hi, Skyler Dias
          </p>
          <p className="text-textBase font-medium	text-[#54577A]">
            Let's finish your task today!
          </p>
        </div>
        <div className="flex gap-10">
          <Image src={Notification} alt="Notification" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
