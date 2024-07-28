"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/assets/images/Logo.png";
import Overview from "@/assets/icons/overview.svg";
import Task from "@/assets/icons/book.svg";
import Mentor from "@/assets/icons/user-octagon.svg";
import Message from "@/assets/icons/message.svg";
import Settings from "@/assets/icons/setting.svg";
import HelpCenter from "@/assets/images/HelpCenter.png";

import styles from "@/styles/sidebar.module.css";

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
    <>
      <div className="bg-white flex flex-col items-center h-screen gap-10 ">
        <Image src={Logo} alt="Logo" className="mt-10" />
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
    </>
  );
};

export default SideBar;
