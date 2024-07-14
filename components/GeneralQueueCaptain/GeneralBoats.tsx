import React, { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import QueueModalConfirm from "@components/GeneralQueueCaptain/QueueModalConfrm"; // Adjust path as needed

const GeneralBoats = ({ title }: any) => {
  const initialRows = [
    {
      id: "1",
      name: "محمد علي",
      category: "ربان السفينة",
      phone: "0555123456",
    },
    {
      id: "2",
      name: "أميرة خالد",
      category: "ملاح البحار",
      phone: "0500987654",
    },
    {
      id: "3",
      name: "جمال سعد",
      category: "كابتن القارب",
      phone: "0567788990",
    },
    // Add more rows as needed
  ];

  const [initialOrderRows, setInitialOrderRows] = useState([...initialRows]);
  const [latestOrderedRows, setLatestOrderedRows] = useState([...initialRows]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [initialPosition, setInitialPosition] = useState(0); // State for initial position
  const [droppedPosition, setDroppedPosition] = useState(0); // State for dropped position

  // Handlers for drag start and end
  const handleDragStart = (rowId: string) => {
    document.getElementById(`row-${rowId}`)?.classList.add("dragging");
  };

  const handleDragEnd = (rowId: string) => {
    document.getElementById(`row-${rowId}`)?.classList.remove("dragging");
  };

  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const draggedRow = latestOrderedRows[dragIndex];
    const updatedRows = [...latestOrderedRows];

    // Remove the dragged row from its original position
    updatedRows.splice(dragIndex, 1);

    // Insert the dragged row at the new position
    updatedRows.splice(hoverIndex, 0, draggedRow);

    // Update the latest ordered rows
    setLatestOrderedRows(updatedRows);
    setInitialPosition(dragIndex); // Set initial position for confirmation message
    setDroppedPosition(hoverIndex + 1); // Set dropped position for confirmation message
    setIsDialogOpen(true); // Open dialog on drop
  };

  const Row = ({ row, index }: { row: any; index: number }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "ROW",
      item: { id: row.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "ROW",
      drop: (item: any, monitor) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveRow(dragIndex, hoverIndex);
      },
    });

    const rowStyle = {
      opacity: isDragging ? 0.5 : 1,
      backgroundColor: isDragging ? "#F87171" : "transparent",
      border: isDragging ? "2px dashed #000" : "none",
      cursor: "move",
      transition:
        "opacity 0.2s ease, background-color 0.2s ease, border 0.2s ease", // CSS transitions
    };

    return (
      <tr
        id={`row-${row.id}`}
        ref={(node) => {
          drag(drop(node));
          if (node) {
            node.addEventListener("dragstart", () => handleDragStart(row.id));
            node.addEventListener("dragend", () => handleDragEnd(row.id));
          }
        }}
        style={rowStyle}
      >
        <td className="p-2">
          <span className="inline-block w-[28px] h-[28px] bg-gray-200 rounded-full flex items-center justify-center">
            {index + 1}
          </span>
        </td>
        <td className="px-6 py-4">{row.name}</td>
        <td className="px-6 py-4">{row.category}</td>
        <td className="px-6 py-4">{row.phone}</td>
        <td className="px-6 py-4">
          <div className="flex space-x-2">
            <button className="bg-red-500 text-white p-2 rounded-lg">
              إنزال إلى أسفل الطابور
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-lg">
              إرفع إلى أعلى الطابور
            </button>
          </div>
        </td>
      </tr>
    );
  };

  const handleConfirm = () => {
    setInitialOrderRows([...latestOrderedRows]); // Apply the latest ordered rows to the initial order
    setIsDialogOpen(false); // Close the dialog after confirmation
  };

  const handleCancel = () => {
    setLatestOrderedRows([...initialOrderRows]); // Revert latest ordered rows to initial order on cancel
    setIsDialogOpen(false); // Close the dialog if canceled
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="border rounded-lg">
        <div className="p-4 bg-white">
          <p className="font-medium">{title}</p>
        </div>
        <div className="boat-table">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-right max-w-[83px]">الترتيب</th>
                <th className="px-6 py-3 text-right max-w-[138px]">الاسم</th>
                <th className="px-6 py-3 text-right max-w-[114px]">القارب</th>
                <th className="px-6 py-3 text-right max-w-[126px]">الجوال</th>
                <th className="px-6 py-3 text-right max-w-[276px]">العملية</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-xs">
              {latestOrderedRows.map((row: any, index: number) => (
                <Row key={row.id} row={row} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isDialogOpen && (
        <QueueModalConfirm
          open={isDialogOpen}
          message={`هل أنت متأكد من نقل ترتيب "${
            initialOrderRows[initialPosition]?.name
          }" من ${initialPosition + 1} إلى ${droppedPosition}؟`}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </DndProvider>
  );
};

export default GeneralBoats;
