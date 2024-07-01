import MainNav from "@components/MainNavComponent/MainNav";
import LatestTrips from "./LatestTrips";
import MainBtn from "./MainBtn";
import PayInfo from "./PayInfo";
import PrintForms from "./PrintForms";
import SeaTripTable from "./SeaTripTable";
import { useEffect, useState } from "react";

const MainHome = ({ mainData }: any) => {
  console.log(mainData);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tripTable, setTripTable] = useState([]);
  const [latestTripSearch, setLatestTripSearch] = useState("");

  useEffect(() => {
    if (mainData) {
      setTripTable(mainData);
    }
  }, [mainData]);
  const test = () => {
    console.log("hello");
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      return !prev;
    });
  };
  console.log(latestTripSearch);

  return (
    <>
      <div className=" w-full ">
        {/* <div className="w-2/12 my-4 mx-auto overflow-hidden">
          <MainNav isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div> */}
        <div className="main flex flex-wrap w-full">
          <div className="lg:w-1/3 w-full ">
            <PayInfo mainData={mainData} />
          </div>
          <div className="w-2/3  ">
            <div className="main-btns my-4">
              <MainBtn />
            </div>
            <div className="main-forms flex flex-wrap lg:flex-nowrap">
              <div className="lg:w-1/3 w-full lg:ml-4">
                <PrintForms formSubmit={test} formName={"طباعة تذكرة"} />
              </div>
              <div className="lg:w-1/3 w-full">
                <PrintForms formSubmit={test} formName={"طباعة فاتورة"} />
              </div>
              <div className="lg:w-1/3 w-full">
                <PrintForms formSubmit={test} formName={"تحضير القوارب"} />
              </div>
            </div>
            <LatestTrips searchQueryState={setLatestTripSearch} />
            <SeaTripTable
              tripTable={tripTable}
              searchResult={latestTripSearch}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
