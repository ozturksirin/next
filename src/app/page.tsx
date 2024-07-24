"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleClick = () => {
    alert("Hello, world!");
  };
  return (
    <main className="bg-current flex min-h-screen flex-col p-24">
      <div className="">
        <h1>TESTİNG</h1>
      </div>
      <Button onClick={handleClick}>Click me</Button>
    </main>
  );
}
