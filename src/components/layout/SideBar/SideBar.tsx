"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/assets/Logo.png";
import Overview from "@/assets/overview.svg";
import Task from "@/assets/book.svg";
import Mentor from "@/assets/user-octagon.svg";
import Message from "@/assets/message.svg";
import Settings from "@/assets/setting.svg";

type Props = {};

const SideBar = (props: Props) => {
  const {} = props;
  const pathname = usePathname();

  const links = [
    { href: "/Dashboard", src: Overview, label: "Overview" },
    { href: "/Task", src: Task, label: "Task" },
    { href: "/Mentors", src: Mentor, label: "Mentors" },
    { href: "/Message", src: Message, label: "Message" },
    { href: "/Settings", src: Settings, label: "Settings" },
  ];

  return (
    <div className="bg-white flex flex-col items-center h-screen gap-10 mt-10">
      <Image src={Logo} alt="Logo" />
      <div className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link href={link.href} key={link.label} passHref>
            <div
              className={`flex gap-3 p-4 rounded-lg ${
                pathname === link.href ? "bg-active" : ""
              }`}
            >
              <Image src={link.src} alt={link.label} />
              <p>{link.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
