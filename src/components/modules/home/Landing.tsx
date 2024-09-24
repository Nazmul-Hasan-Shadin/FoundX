import { Input } from "@nextui-org/input";
import React from "react";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/lol.jpeg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto" >
      <Input
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        placeholder="search..."
        size="lg"
        startContent={
            <SearchIcon></SearchIcon>
        }
      />
      </div>
    </div>
  );
};

export default Landing;
