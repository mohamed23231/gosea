import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip, faPrint, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { GoPencil } from "react-icons/go";
import axios from "axios";
import { API_BASE_URL } from "@configs/envs";

const PayInfo = ({ mainData, setDialogOpen, setDialogMessage }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission on Enter key
        setSearchQuery(""); // Clear the search query on Enter key press
      } else {
        setSearchQuery((prevQuery) => prevQuery + event.key); // Append the key press to the search query
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field when the component mounts
    }
  }, []);

  const handleSearch = () => {
    inputRef.current.value = searchQuery;
    printTicket(searchQuery);
    setSearchQuery("");
    // Implement search action here

    console.log("Search triggered:", searchQuery);
  };

  const searchBarCode = () => {
    // Implement print action here
    console.log("Print triggered");
  };

  const handlePrint = () => {
    // Implement print action here
    console.log("Print triggered");
  };

  const printTicket = async (ticket: any) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/admin_marsa/GETOrder?barcode=${ticket}`
      );
      console.log(response);
      setData(response.data);
      console.log(data.order);
      // router.push({
      //   pathname: "/print",
      //   query: { printInvoiceForm: JSON.stringify(printData) },
      // });
    } catch (error: any) {
      setDialogMessage(error?.response?.data?.message);
      setDialogOpen(true);
      console.log("error from fetching home data", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="payment-info px-4">
        <div className="info my-4">
          <h2 style={{ color: "#415A77" }} className="text-2xl font-semibold">
            الشاشة الرئيسيه
          </h2>
          <p>تابع اخر الرحلات و بيانات الدفع الخاصة بك</p>
        </div>
        <div className="mini-boats bg-white border rounded-lg p-2">
          <div style={{}} className="flex h-20	 justify-between ">
            <div className="info flex flex-col justify-between">
              <p className="text-4xl font-bold">
                {mainData.boat_types ? `${mainData.boat_types[1].count}` : 0}
              </p>
              <p style={{ color: "#415A77" }} className="text-sm font-semibold">
                القوارب الصغير الجاهزة للإبحار
              </p>
            </div>
            <div className="icon flex items-center">
              <FontAwesomeIcon
                style={{
                  color: "#DC6803 ",
                  backgroundColor: "#FFFAEB",
                  borderColor: "feefc7",
                }}
                className={"mx-1 block p-1 rounded-full  border-3"}
                icon={faShip}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 mini-boats bg-white border rounded-lg p-2">
          <div style={{}} className="flex h-20	 justify-between ">
            <div className="info flex flex-col justify-between">
              <p className="text-4xl font-bold">
                {mainData.boat_types ? `${mainData.boat_types[0].count}` : 0}
              </p>
              <p style={{ color: "#415A77" }} className="text-sm font-semibold">
                قوارب النزهة الجاهزة للإبحار
              </p>
            </div>
            <div className="icon flex items-center">
              <FontAwesomeIcon
                style={{
                  color: "#DC6803 ",
                  backgroundColor: "#FFFAEB",
                  borderColor: "feefc7",
                }}
                className={"mx-1 block p-1 rounded-full bg-mainColor border-3"}
                icon={faShip}
              />
            </div>
          </div>
        </div>
        <div className="pay-info-form mt-4 mini-boats bg-white border rounded-lg p-2">
          <div>
            <p style={{ fontSize: "15px" }} className="font-semibold my-2">
              بيانات الدفع
            </p>
            <p
              style={{ fontSize: "12px", color: "#677B92" }}
              className="font-semibold my-2"
            >
              هذا النص هو مثال لنص يمكن أن يستبدل فيمولد النص
            </p>
            <form className="my-3" onSubmit={(e) => e.preventDefault()}>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 end-2 flex items-center pe-3">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                    onClick={handleSearch}
                  />
                </div>
                <div className="absolute inset-y-0 end-10 flex items-center pe-3">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                    onClick={handlePrint}
                  />
                </div>
                <input
                  ref={inputRef}
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
        <div className="invoice-info">
          {data && (
            <>
              {" "}
              <div className="flex justify-between items-center">
                <div>
                  <p
                    style={{ fontSize: "15px" }}
                    className="font-semibold my-2"
                  >
                    تفاصيل الفاتورة{" "}
                  </p>
                  <p
                    style={{ fontSize: "12px", color: "#677B92" }}
                    className="font-semibold my-2"
                  >
                    يمكنك تعديل بيانات الفاتورة{" "}
                  </p>
                </div>
                <div>
                  <button className=" flex items-center text-gray-900 hover:text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                    <GoPencil />
                    تعديل البيانات
                  </button>
                </div>
              </div>
              <div className="flex justify-between my-4">
                <p style={{ color: "#677B92" }}>الحالة</p>
                <span
                  className="border rounded-lg px-2 py-1"
                  style={{ backgroundColor: "#E0F2FE" }}
                >
                  تذكره{" "}
                </span>
              </div>
              <div className="my-4">
                <p style={{ color: "#677B92" }}>الاسم</p>
                <p style={{ fontSize: "15px" }} className="font-semibold my-2">
                  {data.order.client_name}
                </p>
              </div>
              <div className="my-4">
                <p style={{ color: "#677B92" }}>رقم الجوال</p>
                <p style={{ fontSize: "15px" }} className="font-semibold my-2">
                  {data.order.client_phone ?? "لا يوجد"}
                </p>
              </div>
              <div className="my-4">
                <p style={{ color: "#677B92" }}>عدد الاشخاص</p>
                <p style={{ fontSize: "15px" }} className="font-semibold my-2">
                  {data.order.peoples}
                </p>
              </div>
              <div className="my-4">
                <p style={{ color: "#677B92" }}>المدة</p>
                <p style={{ fontSize: "15px" }} className="font-semibold my-2">
                  {data.order.time_slot}
                </p>
              </div>
              <div className="my-4">
                <p style={{ color: "#677B92" }}>نوع القارب</p>
                <p style={{ fontSize: "15px" }} className="font-semibold my-2">
                  {data.order.boat_type}
                </p>
              </div>
              <div className="my-4">
                <p style={{ color: "#677B92" }}>أسم القارب</p>
                <p style={{ fontSize: "15px" }} className="font-semibold my-2">
                  {data.order.boat}
                </p>
              </div>
              <div className="my-4">
                <p style={{ color: "#677B92" }}>المجموع</p>
                <p
                  style={{ fontSize: "15px", color: "#027A48" }}
                  className="font-bold my-2"
                >
                  {data.order.paid}
                </p>
              </div>
              {/* <div className="my-4">
                <p style={{ color: "#677B92" }}>التحضير اليومي</p>
                <p style={{ fontSize: "15px" }} className="font-semibold my-2">
                  0{" "}
                </p>
              </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PayInfo;
