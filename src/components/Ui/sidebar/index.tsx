"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import Link from "next/link";
import SidebarOptions from "./sidebarOptions";
import { useUser } from "@/src/context/user.provider";
import { adminLinks, userLinks } from "./costants";
import Image from "next/image";

const Sidebar = () => {
  const { user } = useUser();
  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[330px] w-full rounded-md">
          <h1>Ekhane user er profile picture hobe</h1>
          <Image alt="user image" src={user?.profilePhoto as string} />
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          <p className="break-words text-sm">{user?.email}</p>
        </div>
        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/profile/create-post"}
        >
          Create a post
        </Button>
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions
          links={user?.role === "USER" ? userLinks : adminLinks}
        />
      </div>
    </div>
  );
};

export default Sidebar;
