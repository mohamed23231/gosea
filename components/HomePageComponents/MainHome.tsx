import MainNav from "@components/MainNavComponent/MainNav";
import LatestTrips from "./LatestTrips";
import MainBtn from "./MainBtn";
import PayInfo from "./PayInfo";
import PrintForms from "./PrintForms";
import SeaTripTable from "./SeaTripTable";
import { useState } from "react";

const MainHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const test = () => {
    console.log("hello");
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <div className=" w-full ">
        {/* <div className="w-2/12 my-4 mx-auto overflow-hidden">
          <MainNav isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div> */}
        <div className="main flex w-full">
          <div className="w-1/3 ">
            <PayInfo />
          </div>
          <div className="w-2/3  ">
            <div className="main-btns my-4">
              <MainBtn />
            </div>
            <div className="main-forms flex">
              <div className="w-1/2 ml-4">
                <PrintForms formSubmit={test} formName={"طباعة تذكرة"} />
              </div>
              <div className="w-1/2">
                <PrintForms formSubmit={test} formName={"طباعة فاتورة"} />
              </div>
            </div>
            <LatestTrips />
            <SeaTripTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
