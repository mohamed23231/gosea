import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";

const DailyCloseTable = () => {
  // Dummy data array (replace with your actual data retrieval logic)
  const dummyData = [
    {
      barcode: "123456789",
      status: "Completed",
      captain: "John Doe",
      client_name: "Jane Smith",
      client_phone: "123-456-7890",
      boat: "Boat 1",
      peoples: 4,
      updated_at: new Date(),
      time_slot: "10:00 AM - 12:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    {
      barcode: "987654321",
      status: "Accepted",
      captain: "Alice Johnson",
      client_name: "Bob Brown",
      client_phone: null,
      boat: "Boat 2",
      peoples: 3,
      updated_at: new Date(),
      time_slot: "02:00 PM - 04:00 PM",
      created_at: new Date(),
    },
    // Add more dummy data objects as needed
  ];

  // State for pagination and current page
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Adjust as per your pagination needs

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };

  // Function to format date
  const formatDate = (date: any) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  return (
    <div
      style={{ backgroundColor: "white" }}
      className="relative overflow-auto shadow-md sm:rounded-lg container mx-auto mt-5"
    >
      <div className="flex py-5 rounded-xl overflow-auto ">
        <p className="w-1/2">المعلومات الاساسية </p>
        <p className="w-1/2">الفواتير </p>
      </div>
      <table className="text-sm text-gray-500 bg-white">
        <thead
          style={{ backgroundColor: "#F3F5F6" }}
          className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr className="text-center">
            <th scope="col" className="px-6 py-3 sticky right-0  ">
              الباركود
            </th>
            <th scope="col" className="px-6 py-3 min-w-[327px]">
              الاسم
            </th>

            <th scope="col" className="px-6 py-3 min-w-[327px]">
              القارب
            </th>
            <th scope="col" className="px-6 py-3 min-w-[172px]">
              رقم الجوال
            </th>
            <th scope="col" className="px-6 py-3 min-w-[131px]">
              الرمز الشريطي
            </th>
            <th scope="col" className="px-6 py-3 min-w-[227.5px]">
              الوقت{" "}
            </th>
            <th scope="col" className="px-6 py-3 min-w-[227.5px]">
              نوع
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((trip, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center text-xs"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky right-0 dark:bg-gray-900">
                {trip.barcode}
              </td>
              <td className="px-6 py-4">{trip.client_name}</td>
              <td className="px-6 py-4">{trip.boat}</td>
              <td className="px-6 py-4">{trip.client_phone ?? "لا يوجد"}</td>
              <td className="px-6 py-4">{formatDate(trip.updated_at)}</td>
              <td className="px-6 py-4">{formatDate(trip.updated_at)}</td>

              <td className="px-6 py-4 flex justify-center ">
                <div
                  className={`flex min-w-28 px-4 py-2.5 rounded-full items-center ${
                    trip.status === "Completed"
                      ? "bg-green-300"
                      : trip.status === "Refunded"
                      ? "bg-red-300"
                      : trip.status === "Rejected"
                      ? "bg-red-300"
                      : trip.status === "Accepted"
                      ? "bg-green-300"
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
                        : trip.status === "Accepted"
                        ? "bg-green-800"
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
                        : trip.status === "Accepted"
                        ? "text-green-800"
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
              {/* <td className="px-6 py-4">
                <div className="flex items-center ">
                  <span className="min-w-12">
                    <img
                      src="/man.png"
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full mr-3"
                    />
                  </span>
                  <span>{trip.captain}</span>
                </div>
              </td>
              <td className="px-6 py-4">{trip.peoples}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            variant="outlined"
          />
        </div>
      )}
    </div>
  );
};

export default DailyCloseTable;
