const SeaTripTable = () => {
  const dummyData = [
    {
      barcode: 5555555,
      operation: "تحت الماء",
      captin: "mohamed",
      customerName: "test",
      boat: "ssffg",
      time: "asdasdsad",
    },
    {
      barcode: 5555555,
      operation: "تحت الماء",
      captin: "mohamed",
      customerName: "test",
      boat: "ssffg",
      time: "asdasdsad",
    },
    {
      barcode: 5555555,
      operation: "تحت الماء",
      captin: "mohamed",
      customerName: "test",
      boat: "ssffg",
      time: "asdasdsad",
    },
    {
      barcode: 5555555,
      operation: "تحت الماء",
      captin: "mohamed",
      customerName: "test",
      boat: "ssffg",
      time: "asdasdsad",
    },
    {
      barcode: 5555555,
      operation: "تحت الماء",
      captin: "mohamed",
      customerName: "test",
      boat: "ssffg",
      time: "asdasdsad",
    },
    {
      barcode: 5555555,
      operation: "تحت الماء",
      captin: "mohamed",
      customerName: "test",
      boat: "ssffg",
      time: "asdasdsad",
    },
    {
      barcode: 5555555,
      operation: "تحت الماء",
      captin: "mohamed",
      customerName: "test",
      boat: "ssffg",
      time: "asdasdsad",
    },
  ];

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3">
                الباركود{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                العملية{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                الكابتن{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                اسم العميل{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                القارب{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                الوقت{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData?.map((trip: any, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center    "
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {trip.barcode}
                </td>
                <td className="px-6 py-4">{trip.operation}</td>
                <td className="px-6 py-4">{trip.captin}</td>
                <td className="px-6 py-4">{trip.customerName}</td>
                <td className="px-6 py-4">{trip.boat}</td>
                <td className="px-6 py-4">{trip.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeaTripTable;
