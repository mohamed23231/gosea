import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const rows = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  name: "عبد المجيد فلمبان",
  category: "زعيم البحار",
  phone: "0555645456",
}));

const GeneralBoats = ({ title }: any) => {
  return (
    <div className="border rounded-lg	">
      <div className="p-[20px] bg-white">
        <p className="font-medium ">{title}</p>
      </div>
      <div className="boat-table">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 " style={{ color: "#4C576F" }}>
            <tr>
              <th className="px-6 py-3 text-right max-w-[83px]">الترتيب</th>
              <th className="px-6 py-3 text-right max-w-[138px]">الاسم</th>
              <th className="px-6 py-3 text-right max-w-[114px]">القارب</th>
              <th className="px-6 py-3 text-right max-w-[126px]">الجوال</th>
              <th className="px-6 py-3 text-right max-w-[276px]">العملية</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-xs	">
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td className=" ">
                  <span
                    style={{ backgroundColor: "#ECEFF1" }}
                    className=" m-auto flex justify-center items-center w-[31px] h-[28px] px-[10px] py-[13px] rounded-full"
                  >
                    {index + 1}
                  </span>
                </td>
                <td className=" pr-6 ">{row.name}</td>
                <td className=" px-6 py-4 ">{row.category}</td>
                <td className=" px-6 py-4 ">{row.phone}</td>
                <td className=" pr-[13px] pl-[30px] py-[14px] ">
                  <div className="flex w-[233px]">
                    <button className=" bg-red-500 text-white p-[10px]  rounded-lg ml-1.5 	">
                      إنز الى اخر الطابور
                    </button>

                    <button
                      style={{ backgroundColor: "#0BA5EC" }}
                      className=" text-white w-[44px] h-[44px] p-2.5 rounded-lg mx-1.5"
                    >
                      <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <button
                      style={{ backgroundColor: "#0BA5EC" }}
                      className=" text-white w-[44px] h-[44px] p-2.5 rounded-lg mx-1.5"
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeneralBoats;
