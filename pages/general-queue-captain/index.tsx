import React, { useState } from "react";
import dynamic from "next/dynamic";

const GeneralBoats = dynamic(
  () => import("@components/GeneralQueueCaptain/GeneralBoats"),
  {
    ssr: false,
  }
);

const IndexPage: React.FC = () => {
  const [dialogMessage, setDialogMessage] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleConfirmDialogOpen = (message: string) => {
    setDialogMessage(message);
    setIsDialogOpen(true);
  };

  const handleConfirmDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed!");
    handleConfirmDialogClose();
  };

  return (
    <div className="mt-12 mx-12 mb-6">
      <header className="p-4 bg-white">
        <h1 className="text-2xl font-semibold">كباتن الطابو العام</h1>
        <p className="text-gray-500">
          تابع الطابور العام القوارب الليزرة و القوارب الخاصة
        </p>
      </header>

      <div className="lg:flex space-x-6 lg:justify-between ">
        <div className="mx-5 mt-5 lg:mt-0">
          <GeneralBoats title="قارب نزهة" />
        </div>
        <div className="mx-5 mt-5 lg:mt-0">
          <GeneralBoats title="قارب صغير" />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
