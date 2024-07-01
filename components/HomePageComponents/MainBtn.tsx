import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faUserCircle } from "@fortawesome/free-regular-svg-icons"; // Import from the "regular" icon pack
import {
  faPeopleGroup,
  faShip,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const MainBtn = () => {
  return (
    <>
      {" "}
      <div className="main-btns flex flex-wrap justify-between">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          <FontAwesomeIcon className={"mx-1"} icon={faFile} />
          {/* No need for prefix here */}
          تعديل فاتورة
        </button>
        <button
          type="button"
          style={{ borderColor: "#0BA5EC" }}
          className="text-gray-900 hover:text-white border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          <FontAwesomeIcon
            className={"mx-1"}
            style={{ color: "#0BA5EC" }}
            icon={faUserCircle}
          />
          {/* No need for prefix here */}
          احتياجات خاصة{" "}
        </button>
        <button
          type="button"
          style={{ borderColor: "#039855" }}
          className="text-gray-900 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          <FontAwesomeIcon
            className={"mx-1"}
            style={{ color: "#039855" }}
            icon={faPeopleGroup}
          />
          {/* No need for prefix here */}
          +11 شخص{" "}
        </button>
        <button
          type="button"
          style={{ borderColor: "#039855" }}
          className="text-gray-900 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          <FontAwesomeIcon
            className={"mx-1"}
            style={{ color: "#039855" }}
            icon={faUserGroup}
          />
          {/* No need for prefix here */}
          10 اشخاص
        </button>
        <button
          type="button"
          style={{ borderColor: "#039855" }}
          className="text-gray-900 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          <FontAwesomeIcon
            className={"mx-1"}
            style={{ color: "#039855" }}
            icon={faUserGroup}
          />
          {/* No need for prefix here */}9 اشخاص
        </button>
        <button
          type="button"
          style={{ borderColor: "#D92D20" }}
          className="text-gray-900 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          <FontAwesomeIcon
            className={"mx-1 "}
            style={{ color: "#D92D20" }}
            icon={faShip}
          />
          {/* No need for prefix here */}
          قارب صغير{" "}
        </button>
        <button
          type="button"
          style={{ borderColor: "#0BA5EC" }}
          className="text-gray-900 hover:text-white border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          <FontAwesomeIcon
            className={"mx-1"}
            style={{ color: "#0BA5EC" }}
            icon={faShip}
          />
          {/* No need for prefix here */}
          قارب نزهة{" "}
        </button>
      </div>
    </>
  );
};

export default MainBtn;
