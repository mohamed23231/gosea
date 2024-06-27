import React from "react";

interface DataTableProps {
  columns: string[];
  data: (string | number)[][];
  bgColor: string;
  textDirection?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  bgColor,
  textDirection,
}) => {
  return (
    <table className="min-w-1/4 bg-white">
      <thead className="">
        <tr className={`${textDirection} ${bgColor}  rounded-lg `}>
          <th className="py-2 px-4 rounded-r-lg">{columns[0]}</th>
          <th className="py-2 px-4  rounded-l-lg">{columns[1]}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="py-2 px-4 border-b border-gray-300"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
