"use client";
import { User } from "@prisma/client";
import React from "react";
import Image from "next/image";

interface AvatarProps {
  user: User;
}

const Avatar = ({ user }: AvatarProps) => {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9">
        <Image alt="Avatar" src={user?.image || "/images/user.jpg"} fill />
      </div>
      <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
    </div>
  );
};

export default Avatar;
