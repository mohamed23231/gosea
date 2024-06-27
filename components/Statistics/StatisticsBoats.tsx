import React from "react";

const StatisticsBoats = ({ title }: any) => {
  const rows = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    name: "عبد المجيد فلمبان",
  }));

  return (
    <div className="border rounded-lg min-w-full">
      <div className="p-[20px] bg-white">
        <p className="font-medium ">{title}</p>
      </div>
      <div className="boat-table">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 " style={{ color: "#4C576F" }}>
            <tr className="w-full">
              <th className="px-6 py-3 text-right min-w-1/2">الترتيب</th>
              <th className="px-6 py-3 text-right min-w-1/2">الاسم</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-xs	">
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td className="  flex   items-center  h-[72px] px-[10px] py-[13px] rounded-full">
                  <span
                    style={{ backgroundColor: "#ECEFF1" }}
                    className=" mr-[22px] flex justify-center items-center w-[28px] h-[31px] px-[10px] py-[13px] rounded-full"
                  >
                    {index + 1}
                  </span>
                </td>
                <td className=" pr-6 ">{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticsBoats;
