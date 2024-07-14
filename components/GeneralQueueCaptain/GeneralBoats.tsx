import React, { useState, useMemo } from "react";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DraggableRow } from "./DraggableRow";
import { StaticRow } from "./StaticRow";
import QueueModalConfirm from "@components/GeneralQueueCaptain/QueueModalConfrm"; // Adjust path as needed

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
];

const GeneralBoats = ({ title, confirmDialog }: any) => {
  const [data, setData] = useState([...initialRows]);
  const [initialOrderRows, setInitialOrderRows] = useState([...initialRows]);
  const [latestOrderedRows, setLatestOrderedRows] = useState([...initialRows]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [initialPosition, setInitialPosition] = useState(0); // State for initial position
  const [droppedPosition, setDroppedPosition] = useState(0); // State for dropped position
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
    useSensor(KeyboardSensor, {})
  );

  const handleDragStart = ({ active }: any) => {
    setActiveId(active.id);
  };

  const handleDragEnd = ({ active, over }: any) => {
    if (active.id !== over.id) {
      const dragIndex = data.findIndex((item) => item.id === active.id);
      const hoverIndex = data.findIndex((item) => item.id === over.id);

      setInitialPosition(dragIndex); // Set initial position for confirmation message
      setDroppedPosition(hoverIndex + 1); // Set dropped position for confirmation message

      setIsDialogOpen(true); // Open dialog on drop
    }
    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const handleConfirm = () => {
    const updatedRows = [...latestOrderedRows];
    const draggedRow = updatedRows.splice(initialPosition, 1)[0];
    updatedRows.splice(droppedPosition - 1, 0, draggedRow);

    setLatestOrderedRows(updatedRows); // Apply the latest ordered rows to the initial order
    setInitialOrderRows([...updatedRows]); // Apply the latest ordered rows to the initial order
    setData(updatedRows); // Update the data with the confirmed order

    setIsDialogOpen(false); // Close the dialog after confirmation
  };

  const handleCancel = () => {
    setData([...initialOrderRows]); // Revert data to initial order on cancel
    setIsDialogOpen(false); // Close the dialog if canceled
  };

  const activeItem = useMemo(() => {
    return activeId ? data.find((item) => item.id === activeId) : null;
  }, [activeId, data]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="border rounded-lg">
        <div className="p-4 bg-white">
          <p className="font-medium">{title}</p>
        </div>
        <div className="boat-table">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-right max-w-[83px]"></th>
                <th className="px-6 py-3 text-right max-w-[83px]">الترتيب</th>
                <th className="px-6 py-3 text-right max-w-[138px]">الاسم</th>
                <th className="px-6 py-3 text-right max-w-[114px]">القارب</th>
                <th className="px-6 py-3 text-right max-w-[126px]">الجوال</th>
                <th className="px-6 py-3 text-right max-w-[276px]">العملية</th>
              </tr>
            </thead>
            <SortableContext
              items={data}
              strategy={verticalListSortingStrategy}
            >
              <tbody className="bg-white divide-y divide-gray-200 text-xs">
                {data.map((row, index) => (
                  <DraggableRow
                    key={row.id}
                    row={row}
                    index={index}
                    // confirmDialog={confirmDialog}
                  />
                ))}
              </tbody>
            </SortableContext>
          </table>
        </div>
      </div>
      <DragOverlay>
        {activeId ? (
          <table>
            <tbody>
              <StaticRow row={activeItem} />
            </tbody>
          </table>
        ) : null}
      </DragOverlay>
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
    </DndContext>
  );
};

export default GeneralBoats;
