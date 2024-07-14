import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
const ItemTypes = {
  ROW: "row",
};

export const StaticRow = ({ row }: any) => {
  return (
    <tr>
      <td className="p-2">
        <FontAwesomeIcon icon={faGripVertical} />
      </td>
      {/* <td className="p-2">
        <span className=" w-[28px] h-[28px] bg-gray-200 rounded-full flex items-center justify-center">
          {row.index + 1}
        </span>
      </td> */}
      <td className="px-6 py-4">{row.name}</td>
      <td className="px-6 py-4">{row.category}</td>
      <td className="px-6 py-4">{row.phone}</td>
      <td className="px-6 py-4">
        {/* <div className="flex space-x-2">
          <button className="bg-red-500 text-white p-2 rounded-lg">
            إنزال إلى أسفل الطابور
          </button>
        </div> */}
      </td>
    </tr>
  );
};
