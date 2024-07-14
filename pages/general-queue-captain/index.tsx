import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import QueueModalConfirm from "@components/GeneralQueueCaptain/QueueModalConfrm"; // Adjust path as needed

const GeneralBoats = dynamic(
  () => import("@components/GeneralQueueCaptain/GeneralBoats"),
  {
    ssr: false,
  }
);

const IndexPage = () => {
  const [dialogMessage, setDialogMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConfirmDialogOpen = (message: string) => {
    setDialogMessage(message);
    setIsDialogOpen(true);
  };

  const handleConfirmDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleConfirm = () => {
    // Implement your logic here for what happens when confirmed
    console.log("Confirmed!");
    handleConfirmDialogClose(); // Close the dialog after confirmation
  };

  return (
    <div className="mt-12 mx-12 mb-6">
      <header className="p-4 bg-white">
        <h1 className="text-2xl font-semibold">كباتن الطابو العام</h1>
        <p className="text-gray-500">
          تابع الطابور العام القوارب الليزرة و القوارب الخاصة
        </p>
      </header>

      <div className="flex space-x-6 justify-between">
        <DndProvider backend={HTML5Backend}>
          <GeneralBoats
            title="القوارب الخاصة"
            confirmDialog={handleConfirmDialogOpen} // Pass handler to GeneralBoats
          />
        </DndProvider>
      </div>

      <QueueModalConfirm
        open={isDialogOpen}
        message={dialogMessage}
        onCancel={handleConfirmDialogClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default IndexPage;
