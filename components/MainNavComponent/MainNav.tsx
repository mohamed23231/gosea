import Link from "next/link";
import React from "react";
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
import { FiHome, FiBarChart } from "react-icons/fi";

const MainNav = ({ isOpen, toggleSidebar }: any) => {
  return (
    <div className="h-full container mx-auto relative">
      <div
        className={`z-50 fixed top-0 left-0 h-full  bg-white shadow-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 w-80`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img src="/gosea.png" alt="Logo" className="h-10 w-10 mr-2" />
            <span className="font-bold text-lg">Go Sea</span>
          </div>
          <button onClick={toggleSidebar} className="block md:hidden">
            <div className="h-6 w-6">
              {" "}
              {/* Replace with a proper icon */}
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.66 7.34a1 1 0 10-1.42-1.42L12 9.17 8.76 5.92a1 1 0 00-1.42 1.42L10.59 12l-3.25 3.24a1 1 0 001.42 1.42L12 14.83l3.24 3.25a1 1 0 001.42-1.42L13.41 12l3.25-3.24z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="flex items-center border-y-1 p-4">
          <img
            src="/man.png"
            alt="User Avatar"
            className="h-12 w-12 rounded-full mr-3"
          />
          <div className="mx-1">
            <p className="font-semibold">محمد سعيد</p>
            <p className="text-sm text-gray-600">مدير</p>
          </div>
        </div>

        <nav className="mt-4">
          <ul>
            {/* Each link with icon */}
            <Link
              href={"/homepage"}
              className="flex items-center p-4 text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <li className="  flex items-center">
                <span className="material-icons  ml-3">
                  <FiHome />
                </span>
                <p className="" style={{ color: "#34485F" }}>
                  {" "}
                  الشاشة الرئيسية
                </p>
              </li>
            </Link>
            <Link
              href={"/statistics"}
              className="flex items-center p-4 text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <li className="flex items-center">
                <span className="material-icons  ml-3">
                  <FiBarChart />
                </span>
                <p className="" style={{ color: "#34485F" }}>
                  الإحصاءات{" "}
                </p>
              </li>
            </Link>
            <Link
              href={"/general-queue-captain"}
              className=" flex items-center p-4 text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <li className="flex items-center">
                <span className="material-icons  ml-3">
                  <FiBarChart />
                </span>
                <p className="" style={{ color: "#34485F" }}>
                  كابتن الطابور العام{" "}
                </p>
              </li>
            </Link>
            <Link
              href={"/dailyclose"}
              className=" flex items-center p-4 text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              <li className="flex items-center">
                <span className="material-icons  ml-3">
                  <FiBarChart />
                </span>
                <p className="" style={{ color: "#34485F" }}>
                  الاغلاق اليومي{" "}
                </p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
