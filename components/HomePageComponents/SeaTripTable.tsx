import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

const SeaTripTable = ({ tripTable, searchResult }: any) => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const invoices = tripTable?.invoices || [];
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  const filteredInvoices = searchResult
    ? tripTable?.invoices.filter((invoice: any) =>
        invoice.barcode.includes(searchResult)
      )
    : tripTable?.invoices || [];

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [searchResult]);

  const currentItems = filteredInvoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Custom styles for the Pagination component
  const StyledPagination = styled(Pagination)(({ theme }) => ({
    "& .Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  }));
  function formatDate(isoString: string): string {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  console.log(currentItems);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto mt-5">
        <table className=" text-sm   text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th
                scope="col"
                className="px-6 py-3 sticky right-0 bg-gray-50 dark:bg-gray-700 min-w-[140px] "
              >
                الباركود
              </th>
              <th scope="col" className="px-6 py-3 ">
                العملية
              </th>
              <th scope="col" className="px-6 py-3 min-w-[201px]">
                الكابتن
              </th>
              <th scope="col" className="px-6 py-3 min-w-[114px] ">
                اسم العميل
              </th>
              <th scope="col" className="px-6 py-3 min-w-[114px]">
                الجوال
              </th>
              <th scope="col" className="px-6 py-3 min-w-[114px]">
                القارب
              </th>
              <th scope="col" className="px-6 py-3 min-w-[114px]">
                كمية{" "}
              </th>
              <th scope="col" className="px-6 py-3 min-w-[190px] ">
                وقت اخر اجراء{" "}
              </th>
              <th scope="col" className="px-6 py-3 min-w-[114px]">
                المدة{" "}
              </th>
              <th scope="col" className="px-6 py-3 min-w-[190px] ">
                الوقت{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((trip: any, index: any) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center text-xs"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky right-0  dark:bg-gray-900">
                  {trip.barcode}
                </td>
                <td className="px-6 py-4 flex justify-center ">
                  <div
                    className={`flex min-w-28  px-4 py-2.5 rounded-full items-center ${
                      trip.status === "Completed"
                        ? "bg-green-300"
                        : trip.status === "Refunded"
                        ? "bg-red-300"
                        : trip.status === "Rejected"
                        ? "bg-red-300"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-2 h-2 ${
                        trip.status === "Completed"
                          ? "bg-green-800"
                          : trip.status === "Refunded"
                          ? "bg-red-600"
                          : trip.status === "Rejected"
                          ? "bg-red-600"
                          : ""
                      } rounded-full`}
                    ></div>
                    <span
                      className={`mr-3 ${
                        trip.status === "Completed"
                          ? "text-green-800"
                          : trip.status === "Refunded"
                          ? "text-red-600"
                          : trip.status === "Rejected"
                          ? "text-red-600"
                          : ""
                      }`}
                    >
                      {trip.status == "Completed"
                        ? "مكتملة"
                        : trip.status == "Refunded"
                        ? "مرتجع"
                        : trip.status == "Rejected"
                        ? "مرفوض"
                        : trip.status == "Accepted"
                        ? "مقبول"
                        : ""}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4  ">
                  <div className="flex items-center ">
                    <span className="min-w-12">
                      <img
                        src="/man.png"
                        alt="User Avatar"
                        className="h-8 w-8 rounded-full mr-3"
                      />
                    </span>
                    <span className="">{trip.captain}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{trip.client_name}</td>
                <td className="px-6 py-4">{trip.client_phone}</td>
                <td className="px-6 py-4">{trip.boat}</td>
                <td className="px-6 py-4">x</td>
                <td className="px-6 py-4">{formatDate(trip.updated_at)}</td>
                <td className="px-6 py-4">{trip.time_slot}</td>
                <td className="px-6 py-4">{formatDate(trip.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            <StyledPagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
              variant="outlined"
              shape="circular"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SeaTripTable;
