"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex p-24 justify-center">
      <Link href="/Dashboard">
        <Button>Login</Button>
      </Link>
    </main>
  );
}
