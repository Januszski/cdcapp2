import React, { useContext } from "react";
import { LightsContext } from "./RideMain";
//import "./Stoplight.css"; // Import the CSS file for styling

const GoLight = () => {
  const { rideLights, setRideLights } = useContext(LightsContext);

  let ret;
  if (rideLights === "red") {
    ret = (
      <div className='stoplight'>
        {" "}
        <div className='light red'></div> <div className='light gray'></div>{" "}
        <div className='light gray'></div>{" "}
      </div>
    );
  } else if (rideLights === "yellow") {
    ret = (
      <div className='stoplight'>
        {" "}
        <div className='light gray'></div> <div className='light yellow'></div>{" "}
        <div className='light gray'></div>{" "}
      </div>
    );
  } else if (rideLights === "green") {
    ret = (
      <div className='stoplight'>
        {" "}
        <div className='light gray'></div> <div className='light gray'></div>{" "}
        <div className='light green'></div>{" "}
      </div>
    );
  } else if (rideLights === "EMERGENCY") {
    ret = (
      <div className='stoplight'>
        {" "}
        <div className='light red'></div> <div className='light red'></div>{" "}
        <div className='light red'></div>{" "}
      </div>
    );
  } else {
    ret = (
      <div className='stoplight'>
        {" "}
        <div className='light gray'></div> <div className='light gray'></div>{" "}
        <div className='light gray'></div>{" "}
      </div>
    );
  }

  return ret;
};

export default GoLight;
