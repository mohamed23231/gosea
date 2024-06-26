import GeneralBoats from "@components/GeneralQueueCaptain/GeneralBoats";
import React from "react";

const index = () => {
  return (
    <div
      className="mt-[48px] mx-[59px] mb-[25px]"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <header className="p-4 bg-white ">
        <h1 className="text-xl font-semibold">كباتن الطابو العام</h1>
        <p className="text-gray-500">
          تابع الطابور العام القوارب الليزرة و القوارب الخاصة
        </p>
      </header>

      <div className="flex">
        <div className="ml-[18px] w-1/2">
          <GeneralBoats title={"قارب نزهة"} />
        </div>
        <div className="w-1/2">
          <GeneralBoats title={"قارب صغير"} />
        </div>
      </div>
    </div>
  );
};

export default index;
