import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 h-screen fixed top-0 left-0 overflow-y-auto">
        <div className="p-4 text-white sticky top-0 bg-gray-900">
          <h2 className="text-xl font-semibold">Company</h2>
          <div className="absolute bg-gradient-to-b from-gray-800 to-transparent"></div>
        </div>
        <ul className="mt-4 space-y-2">
          <li className="px-4 py-2 hover:bg-gray-700">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "block w-full px-4 py-2 font-bold text-white bg-gray-700 rounded-lg"
                  : "block w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive
                  ? "block w-full px-4 py-2 font-bold text-white bg-gray-700 rounded-lg"
                  : "block w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700"
              }
            >
              Reports
            </NavLink>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive
                  ? "block w-full px-4 py-2 font-bold text-white bg-gray-700 rounded-lg"
                  : "block w-full px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700"
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content and Header */}
      <div className="flex flex-col flex-1 ml-64 overflow-y-auto ">
        {/* Header */}
        <header className="bg-gray-800 backdrop-blur-md border-b border-gray-300 p-3 sticky top-0 z-10 flex items-center justify-between">
          <form className="relative">
            <div className="absolute left-2 -translate-y-1/2 top-1/2 p-1 text-gray-400">
              <CiSearch />
            </div>
            <input
              className="rounded-full pl-10 pr-4 py-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md bg-gray-700 text-white"
              placeholder="Search..."
              type="text"
              required
            />
          </form>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <FaBell className="text-white text-xl cursor-pointer" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></span>
            </div>
            <div className="relative">
              <FaUserCircle className="text-white text-xl cursor-pointer" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8 text-center min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
