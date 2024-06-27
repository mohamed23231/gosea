import React from "react";
import Section from "./Section";
import DataTable from "./DataTable";

const GeneralQueueCaptain = () => {
  return (
    <div className="p-6">
      {/* <Header /> */}
      <div className="border border-pink-400">
        <h2 className="bg-pink-400 w-full mb-2 py-2">كابتن الطابور العام</h2>
        <div className="flex">
          <div className="ml-3">
            <DataTable
              bgColor="bg-pink-400"
              columns={["# الطابور العام", "قارب"]}
              data={[
                [1, "Smsm-101 - سمسم"],
                [2, "Roma athaletha-025 - روما الثالث"],
              ]}
            />
          </div>
          <div>
            <DataTable
              bgColor="bg-pink-400"
              columns={["# الطابور العام", "قارب"]}
              data={[
                [1, "Smsm-101 - سمسم"],
                [2, "Roma athaletha-025 - روما الثالث"],
              ]}
            />
          </div>
        </div>
      </div>
      <div className="w-full border border-blue-400">
        <h3 className="bg-blue-400 py-2 mb-2">رحلة</h3>
        <div className="flex">
          <div className="  ml-3 ">
            <DataTable
              bgColor="bg-blue-400"
              columns={["# الطابور العام", "قارب"]}
              data={[]}
            />
          </div>
          <div className="">
            <DataTable
              bgColor="bg-blue-400"
              columns={["# الطابور العام", "قارب"]}
              data={[]}
            />
          </div>
        </div>
      </div>
      <div className="w-full border border-green-400 overflow-hidden ">
        <h2 className="bg-green-400 py-2 mb-2 my-10">كابتن الطابور العام</h2>

        <div className=" flex my-10">
          <div className="ml-3">
            <h3 className="text-center my-1 font-bold">Excursion Boat</h3>
            <DataTable
              bgColor="bg-green-400"
              textDirection="text-right"
              columns={["#الطابور العام", "اسم العميل"]}
              data={[
                [1, "Omar"],
                [2, "خاص"],
                [3, "Saleh"],
                [4, "ghajaks@gmail.com"],
                [5, "Rasha"],
                [6, "Renad"],
                [7, "Gust"],
                [8, "Muhammed Unaise Ellath"],
                [9, "Gust"],
                [10, "مروان الصحي"],
              ]}
            />
          </div>
          <div>
            <h3 className="text-center my-1 font-bold">Small Boat</h3>
            <DataTable
              bgColor="bg-green-400"
              textDirection="text-right"
              columns={["#الطابور العام", "اسم العميل"]}
              data={[
                [1, "Omar"],
                [2, "خاص"],
                [3, "Saleh"],
                [4, "ghajaks@gmail.com"],
                [5, "Rasha"],
                [6, "Renad"],
                [7, "Gust"],
                [8, "Muhammed Unaise Ellath"],
                [9, "Gust"],
                [10, "مروان الصحي"],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralQueueCaptain;
