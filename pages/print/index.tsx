import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import QRCode from "qrcode.react";

const PrintPage = () => {
  const router = useRouter();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [printInvoiceForm, setPrintInvoiceForm] = useState<any>(null);
  const [printTicket, setprintTicket] = useState(null);

  function formatDateTime(dateStr: string) {
    const date = new Date(dateStr);

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedTime = date.toLocaleTimeString("en-US", timeOptions);
    const formattedDate = date.toLocaleDateString("en-US", dateOptions);

    return {
      formattedTime,
      formattedDate,
    };
  }

  useEffect(() => {
    if (router.query.printInvoiceForm) {
      setPrintInvoiceForm(JSON.parse(router.query.printInvoiceForm as string));
    }
  }, [router.query]);

  console.log("from print page", printInvoiceForm);
  console.log("from print page ticket", printTicket);
  return (
    <div className="] flex items-center justify-center  ">
      <div className="space-y-6">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          Print Invoice
        </button>
        <div
          ref={componentRef}
          className="p-6 bg-white shadow-md min-h-[1786.84px] min-w-[525px] "
        >
          <div className="border rounded-lg">
            <div className="img flex justify-center flex-col items-center">
              <img src="/gosea.png" alt="Logo" className="h-10 w-10 mr-2" />
              <h1 className="text-xl font-bold">Go Sea</h1>
            </div>
            {/* <h1 className="text-2xl font-bold text-center">Invoice</h1> */}
            <div className="mb-[15px] text-center flex justify-center">
              {printInvoiceForm?.invoice && (
                <QRCode
                  value={`${printInvoiceForm?.invoice.barcode}`}
                  size={128}
                />
              )}
              {printInvoiceForm?.order && (
                <QRCode
                  value={`${printInvoiceForm?.order.barcode}`}
                  size={128}
                />
              )}
            </div>
            <div className="mb-[15px] text-center ">الفاتوره | Invoice</div>
            <div
              style={{ borderColor: "#ECEFF1" }}
              className="mb-[15px] border-t-2 border-b-2 "
            >
              <p style={{ color: "677B92" }} className="mb-[15px]">
                مرسي الامانة جدة
              </p>
              <p style={{ color: "#273647", fontSize: "14px" }}>
                300889546546546{" "}
              </p>
            </div>

            {printInvoiceForm?.invoice && (
              <>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px] flex    border-b-2"
                >
                  <div className="w-1/2">
                    <p style={{ color: "#677B92" }} className="mb-[15px]">
                      الوقت | Time{" "}
                    </p>
                    <p style={{ color: "#273647" }} className="">
                      {
                        formatDateTime(printInvoiceForm?.invoice.created_at)
                          .formattedTime
                      }
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p style={{ color: "#677B92" }} className="mb-[15px]">
                      تاريخ | Date{" "}
                    </p>
                    <p style={{ color: "#273647" }} className="">
                      {
                        formatDateTime(printInvoiceForm?.invoice.created_at)
                          .formattedDate
                      }
                    </p>
                  </div>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    الاسم | Name{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.invoice.client_name}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    رقم الجوال | Mobile{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.invoice.client_phone ?? "لا يوجد"}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    نوع المركبة | Boat Type{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.invoice.boat_type}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    عدد الاشخاص | No. of Persons{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.invoice.peoples}{" "}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    المدة | Time{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.invoice.time_slot}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    اسم المركب | Boat Name{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.invoice.boat}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    اسم الكابتن | Captain Name
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.invoice.captain}
                  </p>
                </div>
                {/* <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    رقم المرسى | Marsa
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>D-10 </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]   "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    رقم الموقف | Section
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    ممر الامانة{" "}
                  </p>
                </div> */}
              </>
            )}
            {printInvoiceForm?.order && (
              <>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px] flex    border-b-2"
                >
                  <div className="w-1/2">
                    <p style={{ color: "#677B92" }} className="mb-[15px]">
                      الوقت | Time{" "}
                    </p>
                    <p style={{ color: "#273647" }} className="">
                      {
                        formatDateTime(printInvoiceForm?.order.created_at)
                          .formattedTime
                      }
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p style={{ color: "#677B92" }} className="mb-[15px]">
                      تاريخ | Date{" "}
                    </p>
                    <p style={{ color: "#273647" }} className="">
                      {
                        formatDateTime(printInvoiceForm?.order.created_at)
                          .formattedDate
                      }
                    </p>
                  </div>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    الاسم | Name{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.order.client_name}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    رقم الجوال | Mobile{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.order.client_phone ?? "لا يوجد"}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    نوع المركبة | Boat Type{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.order.boat_type}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    عدد الاشخاص | No. of Persons{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.order.peoples}{" "}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    المدة | Time{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.order.time_slot}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    اسم المركب | Boat Name{" "}
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.order.boat}
                  </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    اسم الكابتن | Captain Name
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    {printInvoiceForm?.order.captain}
                  </p>
                </div>
                {/* <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]  border-b-2 "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    رقم المرسى | Marsa
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>D-10 </p>
                </div>
                <div
                  style={{ borderColor: "#ECEFF1" }}
                  className="mb-[15px]   "
                >
                  <p style={{ color: "#677B92" }} className="mb-[15px]">
                    رقم الموقف | Section
                  </p>
                  <p style={{ color: "#273647", fontSize: "14px" }}>
                    ممر الامانة{" "}
                  </p>
                </div> */}
              </>
            )}
          </div>
          <>
            <div className="border rounded-lg mt-10">
              <div
                style={{ borderColor: "#ECEFF1" }}
                className="my-[15px]  border-b-2 "
              >
                <p
                  className="text-center font-semibold"
                  style={{ color: "#273647" }}
                >
                  التكلفة | Cost{" "}
                </p>
              </div>
              <div
                style={{ borderColor: "#ECEFF1" }}
                className="my-[15px]  border-b-2 "
              >
                <p style={{ color: "#677B92" }} className="mb-[15px]">
                  المبلغ قبل الضريبة | Without Tax{" "}
                </p>
                <p style={{ color: "#273647", fontSize: "14px" }}>173 </p>
              </div>
              <div
                style={{ borderColor: "#ECEFF1" }}
                className="my-[15px]  border-b-2 "
              >
                <p style={{ color: "#677B92" }} className="mb-[15px]">
                  نسبة الضريبة | Tax Rate
                </p>
                <p style={{ color: "#273647", fontSize: "14px" }}>15% </p>
              </div>
              <div
                style={{ borderColor: "#ECEFF1" }}
                className="my-[15px]  border-b-2 "
              >
                <p style={{ color: "#677B92" }} className="mb-[15px]">
                  الضريبة | Tax{" "}
                </p>
                <p style={{ color: "#273647", fontSize: "14px" }}>26 </p>
              </div>
              <div style={{ borderColor: "#ECEFF1" }} className="my-[15px]  ">
                <p style={{ color: "#677B92" }} className="mb-[15px]">
                  المبلغ الاجمالي | Total Amount{" "}
                </p>
                <p style={{ color: "#273647", fontSize: "14px" }}>
                  {printInvoiceForm?.order?.paid
                    ? printInvoiceForm?.order?.paid
                    : printInvoiceForm?.invoice?.paid
                    ? printInvoiceForm?.invoice?.paid
                    : 0}{" "}
                </p>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default PrintPage;
