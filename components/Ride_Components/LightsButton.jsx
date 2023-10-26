import React, { useState, useContext, useEffect } from "react";

const LightsButton = ({ setLight, rideState }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setLight("red");
      setTimeout(() => {
        setLight("yellow");
        setTimeout(() => {
          setLight("green");

          setTimeout(() => {
            setLight("gray");
          }, 2000);
        }, 2000);
      }, 2000);
    }, 0);
    setTimeout(() => {
      console.log(rideState);
      if (rideState === "/paint/wait.png") {
        setIsDisabled(false);
      }
    }, 6005);
  };

  useEffect(() => {
    return () => {
      clearTimeout(); // Clear the timeout if the component unmounts
    };
  }, []);

  useEffect(() => {
    if (rideState === "/paint/go.gif") {
      console.log("HERE");
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [rideState]);

  return (
    <div className='metallic-background'>
      <button
        onClick={handleClick}
        disabled={isDisabled}
        style={{
          backgroundColor: isDisabled ? "#CBC3E3" : "purple",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {isDisabled ? "Please wait for lights to finish" : "Start lights"}
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

export default LightsButton;
