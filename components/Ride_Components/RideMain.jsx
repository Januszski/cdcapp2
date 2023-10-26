"use client";
import React, { useState } from "react";
import Frame from "./Frame";
import ImageSection from "./ImageSection";
import RideButton from "./RideButton";
import GoLight from "./GoLights";
import LightsButton from "./LightsButton";
import { Press_Start_2P } from "next/font/google";
import EmergencyStopButton from "./EmergencyStopButton";

const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export const LightsContext = React.createContext();

const RideMain = () => {
  const [imageURL, setImageURL] = useState("/paint/wait.png");
  const [rideLights, setRideLights] = useState("gray");

  return (
    <>
      <span
        className={`${press.className} text-xl flex items-center justify-center p-5`}
      >
        <span className={`text-xl flex items-center justify-center p-5`}>
          <span className='letter-animation'>
            All Aboard The Git and Split!
          </span>
        </span>
      </span>
      <LightsContext.Provider value={{ rideLights, setRideLights }}>
        <Frame>
          <ImageSection imageUrl={imageURL} />
        </Frame>
      </LightsContext.Provider>

      <div className='flex justify-center items-center content-center'>
        <LightsButton setLight={setRideLights} rideState={imageURL} />
        <span className='p-5' />
        <RideButton
          setRideState={setImageURL}
          rideState={imageURL}
          rideLights={rideLights}
        />
        <span className='p-5' />
        <EmergencyStopButton
          setImageURL={setImageURL}
          setRideLights={setRideLights}
          rideState={imageURL}
        />
      </div>
    </>
  );
};

export default RideMain;
