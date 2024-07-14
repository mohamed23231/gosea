import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

export const DraggableRow = ({ row, index }: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: row.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    backgroundColor: isDragging ? "#DEEAF2" : "transparent",
    border: isDragging ? "1px solid #000" : "none",
    width: "100%", // Ensures the row retains full width
    minWidth: "1000px", // Fixed minimum width for the row
  };

  const test = () => {
    console.log("Clicked"); // Placeholder for your test function
  };

  console.log("Index:", index); // Debug statement to check index value

  return (
    <tr style={style} {...attributes} {...listeners}>
      <td
        ref={setNodeRef}
        className="text-center cursor-move"
        style={{ width: "100px", minWidth: "50px" }} // Adjust width and minWidth as needed
      >
        <FontAwesomeIcon icon={faGripVertical} />
      </td>
      <td className="px-6 py-4">
        <span className="w-[28px] h-[28px] bg-gray-200 rounded-full flex items-center justify-center">
          {index + 1}
        </span>
      </td>
      <td className="px-6 py-4">{row.name}</td>
      <td className="px-6 py-4">{row.category}</td>
      <td className="px-6 py-4">{row.phone}</td>
      <td className="px-6 py-4">
        <div className="flex space-x-2">
          <button
            style={{ borderColor: "#ECEFF1" }}
            className="text-black p-2 border rounded-lg"
            onClick={test}
          >
            إنزال إلى أسفل الطابور
          </button>
        </div>
      </td>
    </tr>
  );
};
