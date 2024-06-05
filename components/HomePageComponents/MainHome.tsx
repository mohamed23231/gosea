import MainNav from "@components/MainNavComponent/MainNav";
import LatestTrips from "./LatestTrips";
import MainBtn from "./MainBtn";
import PayInfo from "./PayInfo";
import PrintForms from "./PrintForms";
import SeaTripTable from "./SeaTripTable";

const MainHome = () => {
  const test = () => {
    console.log("hello");
  };
  return (
    <>
      <div className="flex ">
        <div className="w-1/4 my-4  overflow-hidden">
          <MainNav />
        </div>
        <div className="main flex    w-3/4   ">
          <div className="w-1/3">
            <PayInfo />
          </div>
          <div className="w-2/3 ">
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
