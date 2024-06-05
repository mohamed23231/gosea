import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { GoPencil } from "react-icons/go";

const PayInfo = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
              <p className="text-4xl font-bold">78</p>
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
              <p className="text-4xl font-bold">78</p>
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
            <form className="my-3">
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
        <div className="invoice-info">
          <div className="flex justify-between items-center">
            <div>
              <p style={{ fontSize: "15px" }} className="font-semibold my-2">
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
              تحت الاجراء{" "}
            </span>
          </div>
          <div className="my-4">
            <p style={{ color: "#677B92" }}>الاسم</p>
            <p style={{ fontSize: "15px" }} className="font-semibold my-2">
              تفاصيل الفاتورة{" "}
            </p>
          </div>
          <div className="my-4">
            <p style={{ color: "#677B92" }}>رقم الجوال</p>
            <p style={{ fontSize: "15px" }} className="font-semibold my-2">
              0556454456{" "}
            </p>
          </div>
          <div className="my-4">
            <p style={{ color: "#677B92" }}>عدد الاشخاص</p>
            <p style={{ fontSize: "15px" }} className="font-semibold my-2">
              10{" "}
            </p>
          </div>
          <div className="my-4">
            <p style={{ color: "#677B92" }}>المدة</p>
            <p style={{ fontSize: "15px" }} className="font-semibold my-2">
              المعتمرين | 30 دقيقة{" "}
            </p>
          </div>
          <div className="my-4">
            <p style={{ color: "#677B92" }}>نوع القارب</p>
            <p style={{ fontSize: "15px" }} className="font-semibold my-2">
              قارب صغير{" "}
            </p>
          </div>
          <div className="my-4">
            <p style={{ color: "#677B92" }}>المجموع</p>
            <p
              style={{ fontSize: "15px", color: "#027A48" }}
              className="font-bold my-2"
            >
              500.00{" "}
            </p>
          </div>
          <div className="my-4">
            <p style={{ color: "#677B92" }}>التحضير اليومي</p>
            <p style={{ fontSize: "15px" }} className="font-semibold my-2">
              0{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayInfo;
