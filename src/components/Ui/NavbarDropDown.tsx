"use client";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthServices";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const NavbarDropDown = () => {
  const { setIsLoading, user } = useUser();

  const router = useRouter();
  const handleLogout = () => {
    logout();
    setIsLoading(true);
  };

  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar src={user?.profilePhoto} className="cursor-pointer" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")} key="new">
          profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/create-post")}
          key="new"
        >
          create post
        </DropdownItem>

        <DropdownItem onClick={() => handleNavigation("/profile/settings")}>
          settings
        </DropdownItem>

        <DropdownItem onClick={() => handleLogout()} key="new">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropDown;
