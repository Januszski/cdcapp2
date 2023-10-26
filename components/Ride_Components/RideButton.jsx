import React, { useState, useEffect } from "react";

const RideButton = ({ setRideState, rideState, rideLights }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    setRideState("/paint/go.gif");
    setTimeout(() => {
      setRideState("/paint/wait.png");
    }, 9500);
  };

  useEffect(() => {
    if (rideState === "/paint/wait.png") {
      clearTimeout();
      setIsDisabled(true);
    }
  }, [rideState]);

  useEffect(() => {
    if (rideLights === "green") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rideLights]);

  useEffect(() => {
    return () => {
      clearTimeout(); // Clear the timeout if the component unmounts
    };
  }, []);

  return (
    <div className='metallic-background'>
      <button
        onClick={handleClick}
        disabled={isDisabled}
        style={{
          backgroundColor: isDisabled ? "#90EE90" : "green",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {isDisabled ? "Please wait for ride to finish" : "Start ride"}
        <div className='screws'>
          <div className='screw screw-top-left'></div>
          <div className='screw screw-top-right'></div>
          <div className='screw screw-bottom-left'></div>
          <div className='screw screw-bottom-right'></div>
        </div>
      </button>
    </div>
  );
};

export default RideButton;
