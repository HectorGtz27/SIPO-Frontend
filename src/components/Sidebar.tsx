import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faWrench,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Antes de cambiar:", collapsed);
    setCollapsed(!collapsed);
    console.log("Después de cambiar:", !collapsed);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={`w-64 h-full shadow-md bg-white absolute transition-width duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-5">Logo</div>
      <ul className="list-unstyled">
        <li className="p-2 hover:bg-gray-100">
          <div
            onClick={toggleDropdown}
            className="flex justify-between items-center cursor-pointer"
          >
            <FontAwesomeIcon icon={faHome} /> {/* Ícono de Home */}
            {!collapsed && " Home"}
            {!collapsed && (
              <span className="material-icons">
                {dropdownOpen ? "expand_less" : "expand_more"}
              </span>
            )}
          </div>
          {dropdownOpen && (
            <ul className="pl-4">
              <li className="p-2 hover:bg-gray-100">Submenu 1</li>
              <li className="p-2 hover:bg-gray-100">Submenu 2</li>
              <li className="p-2 hover:bg-gray-100">Submenu 3</li>
            </ul>
          )}
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center">
          <FontAwesomeIcon icon={faInfoCircle} /> {/* Ícono de About */}
          {!collapsed && " About"}
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center">
          <FontAwesomeIcon icon={faWrench} /> {/* Ícono de Services */}
          {!collapsed && " Services"}
        </li>
        <li className="p-2 hover:bg-gray-100 flex items-center">
          <FontAwesomeIcon icon={faAddressBook} /> {/* Ícono de Contact */}
          {!collapsed && " Contact"}
        </li>
      </ul>
      <div className="absolute bottom-0 w-full">
        <button
          onClick={toggleSidebar}
          className="w-full p-4 hover:bg-gray-200"
        >
          {collapsed ? "Expand" : "Collapse"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
