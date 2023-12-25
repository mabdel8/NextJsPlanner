import React from "react";
import SideLinks from "./side-links";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SideNav() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col items-center justify-center gap-2 p-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Hue Brew</h1>
      </div>

      <SideLinks />
    </div>
  );
}
