import { faShip, faUser, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainSelections = ({
  setGeneralQueueHandler,
  setTripHandler,
  generalQueueCaptainHandler,
}: any) => {
  return (
    <div className="space-y-2">
      <button
        onClick={generalQueueCaptainHandler}
        className="w-full text-right py-2 px-4 bg-gray-100 rounded"
      >
        <FontAwesomeIcon
          className={"ml-3 "}
          style={{ color: "#0BA5EC" }}
          icon={faUser}
        />
        {/* No need for prefix here */}
        كباتن الطابور العام
      </button>
      <button
        onClick={setTripHandler}
        className="w-full text-right py-2 px-4 bg-gray-100 rounded"
      >
        <FontAwesomeIcon
          className={"ml-3 "}
          style={{ color: "#0BA5EC" }}
          icon={faShip}
        />
        رحلة
      </button>
      <button
        onClick={setGeneralQueueHandler}
        className="w-full text-right py-2 px-4 bg-gray-100 rounded"
      >
        <FontAwesomeIcon
          className={"ml-3 "}
          style={{ color: "#0BA5EC" }}
          icon={faList}
        />
        الطابور العام{" "}
      </button>
    </div>
  );
};

export default MainSelections;
