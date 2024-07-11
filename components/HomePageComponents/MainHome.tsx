import MainNav from "@components/MainNavComponent/MainNav";
import LatestTrips from "./LatestTrips";
import MainBtn from "./MainBtn";
import PayInfo from "./PayInfo";
import PrintForms from "./PrintForms";
import SeaTripTable from "./SeaTripTable";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@configs/envs";
import axios from "axios";
import { useRouter } from "next/router";
import ConfirmDialogArabic from "@components/utilities/ConfirmDialogArabic";
import EditeInvoiceModal from "./EditeInvoiceModal";
import { faBarcode, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const MainHome = ({
  mainData,
  BtnsClick,
  setDialogOpen,
  setDialogMessage,
  isDialogOpen,
  dialogMessage,
}: any) => {
  const router = useRouter();

  console.log(mainData);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tripTable, setTripTable] = useState([]);
  const [latestTripSearch, setLatestTripSearch] = useState("");
  const [printInvoiceForm, setPrintInvoiceForm] = useState<any>(null);
  // const [isDialogOpen, setDialogOpen] = useState(false);
  // const [dialogMessage, setDialogMessage] = useState("");
  const [isLoadingPrintInvoice, setIsLoadingPrintInvoice] = useState(false);
  const [isLoadingPrintTicket, setIsLoadingPrintTicket] = useState(false);
  const [isLoadingCaptainAttend, setIsLoadingCaptainAttend] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notifyErr = (message: string) => toast.error(`${message}`);
  const notifySuccess = (message: string) => toast.error(`${message}`);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancelDialog = () => {
    setDialogOpen(false);
  };

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

  const printInvoise = async (barcode: any) => {
    if (!barcode) {
      notifyErr("الرجاء التأكد من كتابه كود الفاتوره");
      return;
    }

    try {
      setIsLoadingPrintInvoice(true);
      const response = await axios.get(
        `${API_BASE_URL}/admin_marsa/PrintInvoice?barcode=${barcode}`
      );
      console.log(response);
      let printData = response.data;
      printData.devType = "invoice";
      router.push({
        pathname: "/print",
        query: { printInvoiceForm: JSON.stringify(printData) },
      });
    } catch (error: any) {
      console.log(error?.response?.data?.message);
      if (error.response.status != 200) {
        setDialogMessage(
          "كود الفاتوره خطأ أرجو التأكد من الكود والمحاولة مرة أخرى"
        );
        setDialogOpen(true);
      }
      console.log("error from fetching home data", error);
    } finally {
      setIsLoadingPrintInvoice(false);
    }
  };

  const printTicket = async (ticket: any) => {
    if (!ticket) {
      notifyErr("الرجاء التأكد من كتابه كود التذكره");
      return;
    }

    try {
      setIsLoadingPrintTicket(true);
      const response = await axios.get(
        `${API_BASE_URL}/admin_marsa/GETOrder?barcode=${ticket}`
      );
      console.log(response);
      let printData = response.data;
      printData.devType = "ticket";
      router.push({
        pathname: "/print",
        query: { printInvoiceForm: JSON.stringify(printData) },
      });
    } catch (error: any) {
      console.log(error?.response?.data?.message);
      if (error.response.status != 200) {
        setDialogMessage(
          "كود التذكرة خطأ أرجو التأكد من الكود والمحاولة مرة أخرى"
        );
        setDialogOpen(true);
      }
      console.log("error from fetching home data", error);
    } finally {
      setIsLoadingPrintTicket(false);
    }
  };

  const captainAttends = async (qrNumber: any) => {
    if (!qrNumber) {
      notifyErr("الرجاء التأكد من كتابه الكود");
      return;
    }
    try {
      setIsLoadingCaptainAttend(true);
      const response = await axios.post(
        `https://gosea.app/SetCaptainInQueue/`,
        {
          qrcode: qrNumber,
        }
      );
      console.log(response);
    } catch (error: any) {
      if (error.response.status != 200) {
        notifyErr("برجاء أعادة تحميل الصفحه");
      }
      console.log("error from fetching home data", error);
    } finally {
      setIsLoadingCaptainAttend(false);
    }
  };

  return (
    <>
      <div className=" w-full ">
        {/* <div className="w-2/12 my-4 mx-auto overflow-hidden">
          <MainNav isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div> */}
        <div className="main flex flex-wrap w-full">
          <div className="lg:w-1/3 w-full ">
            <PayInfo
              mainData={mainData}
              setDialogOpen={setDialogOpen}
              setDialogMessage={setDialogMessage}
            />
          </div>
          <div className="w-2/3  ">
            <div className="main-btns my-4">
              <MainBtn BtnsClick={BtnsClick} openModal={openModal} />
            </div>
            <div className="main-forms flex flex-wrap lg:flex-nowrap">
              <div className="lg:w-1/3 w-full lg:ml-4">
                <PrintForms
                  backgroundColor={"#b9e6fe"}
                  borderColor={"#e0f2fe"}
                  color={"#0086c9"}
                  isLoading={isLoadingPrintTicket}
                  formSubmit={printTicket}
                  formName={"طباعة تذكرة"}
                  buttoneName="طباعة"
                />
              </div>
              <div className="lg:w-1/3 w-full">
                <PrintForms
                  icon={faFileInvoice}
                  backgroundColor={"#E9D7FE"}
                  borderColor={"#F4EBFF"}
                  color={"#7F56D9"}
                  isLoading={isLoadingPrintInvoice}
                  formSubmit={printInvoise}
                  formName={"طباعة فاتورة"}
                  buttoneName="طباعة"
                />
              </div>
              <div className="lg:w-1/3 w-full">
                <PrintForms
                  icon={faBarcode}
                  backgroundColor={"#C6CED6"}
                  borderColor={"#ECEFF1"}
                  color={"#415A77"}
                  formSubmit={captainAttends}
                  formName={"تحضير القوارب"}
                  buttoneName="تحضير"
                  isLoading={isLoadingCaptainAttend}
                />
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
      <ConfirmDialogArabic
        open={isDialogOpen}
        message={dialogMessage}
        onCancel={handleCancelDialog}
      />
      {isModalOpen && (
        <EditeInvoiceModal
          handleModalClick={handleModalClick}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default MainHome;
