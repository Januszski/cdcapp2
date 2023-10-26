import React, { useEffect, useState } from "react";

const EmergencyStopButton = ({ setImageURL, setRideLights, rideState }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setImageURL("/paint/wait.png");

    setTimeout(() => {
      setRideLights("EMERGENCY");
      // setIsDisabled(true);
      setTimeout(() => {
        setRideLights("gray");
        // setIsDisabled(false);
      }, 1000);
    }, 0);
  };

  useEffect(() => {
    if (rideState === "/paint/go.gif") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rideState]);

  return (
    <div className='striped-square'>
      <button
        onClick={handleClick}
        disabled={isDisabled}
        style={{
          backgroundColor: isDisabled ? "#ffcccb" : "red",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {isDisabled ? "Stopping" : "Stop"}
      </button>
    </div>
  );
};

export default EmergencyStopButton;
