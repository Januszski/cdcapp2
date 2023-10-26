import React from "react";
import ImageSection from "./ImageSection";
import GoLight from "./GoLights";

const Frame = ({ children }) => {
  return (
    <div className='flex py-8 ambient-background'>
      <div className='w-1/4 p-8 flex justify-end'>
        <GoLight />
      </div>
      <div className='flex-1 '>{children}</div>
      <div className='w-1/4 p-8 flex justify-start'>
        <GoLight />
      </div>
    </div>
  );
};

export default Frame;
