import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainSelections = () => {
  return (
    <div className="space-y-2">
      <button className="w-full text-right py-2 px-4 bg-gray-100 rounded">
        <FontAwesomeIcon
          className={"mx-1"}
          style={{ color: "#0BA5EC" }}
          icon={faUser}
        />
        {/* No need for prefix here */}
        احتياجات خاصة{" "}
      </button>
      <button className="w-full text-right py-2 px-4 bg-gray-100 rounded">
        نتيجة
      </button>
      <button className="w-full text-right py-2 px-4 bg-gray-100 rounded">
        الطوائف العامة
      </button>
    </div>
  );
};

export default MainSelections;
