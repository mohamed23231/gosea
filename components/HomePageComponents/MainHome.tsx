import LatestTrips from "./LatestTrips";
import MainBtn from "./MainBtn";
import PrintForms from "./PrintForms";
import SeaTripTable from "./SeaTripTable";

const MainHome = () => {
  const test = () => {
    console.log("hello");
  };
  return (
    <div className="main flex container mx-auto    ">
      <div className="w-1/3"></div>
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
  );
};

export default MainHome;
