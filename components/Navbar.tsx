'use client';
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { BiSupport } from "react-icons/bi";
import { BsFileEarmarkImage, BsImage } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { MdHomeFilled, MdEdit, MdStraighten, MdFolder, } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { FaMagic } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");

  const icons = [
    { id: "home", icon: MdHomeFilled },
    { id: "image", icon: BsImage },
    { id: "video", icon: IoVideocam },
    { id: "scissors", icon: FaMagic },
    { id: "pen", icon: MdEdit },
    { id: "ruler", icon: MdStraighten },
    { id: "folder", icon: MdFolder },
  ];

  return (
    <div className="flex items-center justify-between px-6 py-3 border-b dark:border-gray-800">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* <div className="h-8 w-8 bg-black dark:bg-white rounded"></div> */}
        <div className="h-8 w-8 rounded-full bg-purple-400"></div>
        <span className="font-semibold text-sm">benevolenttimblebat</span>
        <IoIosArrowDown />
      </div>

      {/* Center Icons */}
      <div className="flex items-center gap-4 text-gray-600 bg-gray-100 p-1 rounded-xl dark:text-gray-300 dark:bg-gray-700">
        {icons.map(({ id, icon: Icon }) => (
          <div
            key={id}
            onClick={() => setActive(id)}
            className={`cursor-pointer p-2 rounded-xl transition-colors ${active === id
              ? "bg-white text-gray-900"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
          >
            <Icon className="w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Gallery 1 */}
        <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-lg dark:text-gray-300 dark:bg-gray-700">
          <BsFileEarmarkImage className="w-4 h-4" />
          <span className="text-xs">Gallery</span>
        </div>

        {/* Support */}
        <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-lg  dark:text-gray-300 dark:bg-gray-700">
          <BiSupport className="w-4 h-4" />
          <span className="text-xs ">Support</span>
        </div>

        {/* Notification */}
        <div className="flex items-center gap-1 bg-gray-100 p-2 rounded-full  dark:text-gray-300 dark:bg-gray-700">
          <FaBell className="cursor-pointer w-4 h-4" />
        </div>

        {/* Dark/Light toggle */}
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
          {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Profile avatar */}
        <div className="h-8 w-8 rounded-full bg-purple-400"></div>
      </div>

    </div>
  );
}
