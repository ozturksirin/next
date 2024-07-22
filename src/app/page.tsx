"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleClick = () => {
    alert("Hello, world!");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={handleClick}>Click me</Button>
    </main>
  );
}
