import GeneralQueue from "@components/Statistics/GeneralQueue";
import GeneralQueueCaptain from "@components/Statistics/GeneralQueueCaptain";
import MainSelections from "@components/Statistics/MainSelections";
import StatisticsBoats from "@components/Statistics/StatisticsBoats";
import React, { useState } from "react";

const index = () => {
  const [generalQueueCaptain, setGeneralQueueCaptain] = useState(true);
  const [trip, setTrip] = useState(false);
  const [generalQueue, setGeneralQueue] = useState(false);
  const generalQueueCaptainHandler = () => {
    setGeneralQueueCaptain(true);
    setGeneralQueue(false);
    setTrip(false);
  };
  const setTripHandler = () => {
    setGeneralQueueCaptain(false);
    setGeneralQueue(false);
    setTrip(true);
  };
  const setGeneralQueueHandler = () => {
    setGeneralQueueCaptain(false);
    setGeneralQueue(true);
    setTrip(false);
  };
  return (
    <div className="px-[48px] pt-[48px] pb-[26px] w-full">
      <header>
        <h2 className="font-semibold text-lg mb-2.5">الإحصاءات</h2>
        <p className="mb-5 " style={{ color: "#667085" }}>
          تتبع احتمالات الطوائف العامة
        </p>
      </header>

      <div className="flex ">
        <div className=" min-w-1/6 max-w-[297px]">
          <MainSelections
            setGeneralQueueHandler={setGeneralQueueHandler}
            setTripHandler={setTripHandler}
            generalQueueCaptainHandler={generalQueueCaptainHandler}
          />
        </div>
        {trip && (
          <div className="w-5/6  mr-[32px] flex">
            <div className="min-w-1/2 flex-1 ml-[20px]">
              <StatisticsBoats title={"قوارب الرحلات"} />
            </div>
            <div className="min-w-1/2 flex-1 ">
              <StatisticsBoats title={"قوارب الرحلات"} />
            </div>
          </div>
        )}
        {generalQueueCaptain && (
          <div className="w-5/6">
            <GeneralQueue />
          </div>
        )}
        {generalQueue && (
          <div className="w-5/6">
            <GeneralQueueCaptain />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
