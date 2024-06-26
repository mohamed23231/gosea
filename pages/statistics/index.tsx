import MainSelections from "@components/Statistics/MainSelections";
import React from "react";

const index = () => {
  return (
    <div className="px-[48px] pt-[48px] pb-[26px]">
      <header>
        <h2 className="font-semibold text-lg mb-2.5">الإحصاءات</h2>
        <p className="mb-5 " style={{ color: "#667085" }}>
          تتبع احتمالات الطوائف العامة
        </p>
      </header>
      <MainSelections />
    </div>
  );
};

export default index;
