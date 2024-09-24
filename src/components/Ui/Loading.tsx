import { Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className=" h-screen bg-black-500/10 fixed  flex justify-center items-center z-[999] inset-0 backdrop-blur-md">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
