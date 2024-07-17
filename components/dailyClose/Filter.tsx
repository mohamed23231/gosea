import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [invoiceType, setInvoiceType] = useState("");
  const [invoiceStatus, setInvoiceStatus] = useState("");
  const [cashier, setCashier] = useState("");
  const [captain, setCaptain] = useState("");

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };

  const handleStartTimeChange = (time: any) => {
    setStartTime(time);
  };
  const handleEndTimeChange = (time: any) => {
    setEndTime(time);
  };
  const handleChangeInvoiceType = (event: any) => {
    setInvoiceType(event.target.value);
  };
  const handleChangeInvoiceStatus = (event: any) => {
    setInvoiceStatus(event.target.value);
  };
  const handleChangeCashier = (event: any) => {
    setCashier(event.target.value);
  };
  const handleChangeCaptain = (event: any) => {
    setCaptain(event.target.value);
  };

  return (
    <div
      style={{ backgroundColor: "#FFFFFF" }}
      className="p-[20px] mt-10 rounded-xl"
    >
      <form className="my-3" onSubmit={(e) => e.preventDefault()}>
        <div className="start-date flex">
          <p className="flex items-center">من</p>
          <div className="mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                />
              </div>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                popperPlacement="bottom-start"
                className="block w-[344px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholderText="اختر التاريخ"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div className="mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                />
              </div>
              <DatePicker
                selected={startTime}
                onChange={handleStartTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="الوقت"
                dateFormat="HH:mm"
                className="block w-[344px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholderText="اختر الوقت"
              />
            </div>
          </div>

          <div className="mx-4">
            <div className="">
              <select
                id="countries"
                className="block w-[344px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                value={invoiceType}
                onChange={handleChangeInvoiceType}
              >
                <option value="">نوع الفاتورة</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className="mx-4 flex">
            <p className="flex items-center ml-[22px]">الكاشير</p>

            <div className="">
              <select
                id="countries"
                className="block w-[226px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                value={cashier}
                onChange={handleChangeCashier}
              >
                <option value="">الكاشير</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
        <div className="start-date flex mt-5">
          <p className="flex items-center">الى</p>
          <div className="mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                />
              </div>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                popperPlacement="bottom-start"
                className="block w-[344px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholderText="اختر التاريخ"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div className="mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                />
              </div>
              <DatePicker
                selected={endTime}
                onChange={handleEndTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="الوقت"
                dateFormat="HH:mm"
                className="block w-[344px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholderText="اختر الوقت"
              />
            </div>
          </div>

          <div className="mx-4">
            <div className="">
              <select
                id="countries"
                className="block w-[344px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                value={invoiceStatus}
                onChange={handleChangeInvoiceStatus}
              >
                <option value="">حالة الفاتورة</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className="mx-4 flex">
            <p className="flex items-center ml-[22px]">الكابتن</p>
            <div className="">
              <select
                id="countries"
                className="block w-[226px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                value={captain}
                onChange={handleChangeCaptain}
              >
                <option value="">الكابتن</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[22px]">
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2"
          >
            نفذ الطلب{" "}
          </button>
        </div>
        {/* Additional Inputs or Submit Button */}
      </form>
    </div>
  );
};

export default Filter;
