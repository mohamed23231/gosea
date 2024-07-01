import { faFile, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@nextui-org/spinner";
import React, { useEffect, useState } from "react";

const LatestTrips = ({ searchQueryState }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const test = () => {
    console.log("test");
  };

  useEffect(() => {
    searchQueryState(searchQuery);
  }, [searchQuery]);
  return (
    <>
      <div className=" flex justify-start	 items-center bg-white container p-5 mt-10 mx-auto border rounded ">
        <div className="emplyees-count w-1/2">
          <div>
            <p className="font-semibold">اخر الرحلات </p>
            <p className="text-xs	" style={{ color: "#677B92" }}>
              تتبع اخر الرحلات الخاصة بك{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center w-1/2 flex-1">
          <button
            onClick={test}
            type="button"
            className=" border border-gray-300 text-black bg-white  focus:ring-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-500 focus:border-gray-500 hover:text-white hover:bg-gray-400 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 "
          >
            <span className="mx-1">
              <FontAwesomeIcon className="" icon={faFile} />
            </span>
            طباعة و اصدار الفاتورة
          </button>
          <div className="w-1/2 mx-4 ">
            <form className="">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round" // Corrected property name
                      strokeLinejoin="round" // Corrected property name
                      strokeWidth="2" // Corrected property name
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  placeholder="ابحث"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestTrips;
