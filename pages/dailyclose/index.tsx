import DailyCloseTable from "@components/dailyClose/DailyCloseTable";
import Filter from "@components/dailyClose/Filter";
import React from "react";

const Dailyclose = () => {
  return (
    <div style={{ backgroundColor: "#F3F5F6" }} className="overflow-hidden ">
      <Filter />
      <DailyCloseTable />
    </div>
  );
};

export default Dailyclose;
