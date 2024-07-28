import React from "react";
import Notification from "@/assets/icons/Notification.svg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  title: string;
  subTitle?: string;
  image?: string;
};

const Header = (props: Props) => {
  const { title, subTitle, image } = props;
  return (
    <React.Fragment>
      <div className="flex justify-between py-6 items-center">
        <div>
          <p className="text-textXl font-semibold text-boldTitle">{title}</p>
          <p className="text-textBase font-medium	text-[#54577A]">{subTitle}</p>
        </div>
        <div className="flex gap-10">
          <Image src={Notification} alt="Notification" />
          <Avatar>
            <AvatarImage src={image} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
