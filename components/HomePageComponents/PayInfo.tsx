import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";

const PayInfo = () => {
  return (
    <>
      <div className="payment-info px-4">
        <div className="info my-4">
          <h2 style={{ color: "#415A77" }} className="text-2xl font-semibold">
            الشاشة الرئيسيه
          </h2>
          <p>تابع اخر الرحلات و بيانات الدفع الخاصة بك</p>
        </div>
        <div className="mini-boats bg-white border rounded-lg p-2">
          <div style={{}} className="flex h-20	 justify-between ">
            <div className="info flex flex-col justify-between">
              <p className="text-4xl font-bold">78</p>
              <p style={{ color: "#415A77" }} className="text-sm font-semibold">
                القوارب الصغير الجاهزة للإبحار
              </p>
            </div>
            <div className="icon flex items-center">
              <FontAwesomeIcon
                style={{
                  color: "#DC6803 ",
                  backgroundColor: "#FFFAEB",
                  borderColor: "feefc7",
                }}
                className={"mx-1 block p-1 rounded-full  border-3"}
                icon={faShip}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 mini-boats bg-white border rounded-lg p-2">
          <div style={{}} className="flex h-20	 justify-between ">
            <div className="info flex flex-col justify-between">
              <p className="text-4xl font-bold">78</p>
              <p style={{ color: "#415A77" }} className="text-sm font-semibold">
                القوارب الصغير الجاهزة للإبحار
              </p>
            </div>
            <div className="icon flex items-center">
              <FontAwesomeIcon
                style={{
                  color: "#DC6803 ",
                  backgroundColor: "#FFFAEB",
                  borderColor: "feefc7",
                }}
                className={"mx-1 block p-1 rounded-full bg-mainColor border-3"}
                icon={faShip}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayInfo;
