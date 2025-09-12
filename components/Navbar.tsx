'use client';
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { BiSupport } from "react-icons/bi";
import { BsFileEarmarkImage, BsImage } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { MdHomeFilled, MdEdit, MdStraighten, MdFolder } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { FaMagic } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-5">
          <img src="/krea-logo.png" alt="krea logo"  className="h-10 w-auto" />
          <div className="flex items-center justify-center gap-3" >
            <div className="h-7 w-7 rounded-full bg-radial-gradient cursor-pointer"></div>
            <span className="hidden sm:inline font-semibold text-sm">
              benevolenttimblebat
            </span>
            <IoIosArrowDown className="hidden sm:inline" />
          </div>


        </div>

        {/* Center (desktop only) */}
        <div className="hidden md:flex items-center gap-2 text-gray-600 bg-gray-100 p-1 rounded-xl dark:text-gray-300 dark:bg-gray-700">
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
        <div className="hidden sm:flex items-center gap-3">
          {/* Gallery 1 */}
          <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-lg dark:text-gray-300 dark:bg-gray-700">
            <BsFileEarmarkImage className="w-4 h-4" />
            <span className="text-xs">Gallery</span>
          </div>

          {/* Support */}
          <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-lg dark:text-gray-300 dark:bg-gray-700">
            <BiSupport className="w-4 h-4" />
            <span className="text-xs">Support</span>
          </div>

          {/* Notification */}
          <div className="flex items-center gap-1 bg-gray-100 p-2 rounded-full dark:text-gray-300 dark:bg-gray-700">
            <FaBell className="cursor-pointer w-4 h-4" />
          </div>

          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
          >
            {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Profile avatar */}
          <div className="h-7 w-7 rounded-full bg-radial-gradient"></div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
        >
          {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="sm:hidden flex flex-col gap-3 px-6 pb-4 bg-gray-50 dark:bg-gray-900">
          {/* Center icons */}
          <div className="flex flex-wrap gap-2 text-gray-600 dark:text-gray-300">
            {icons.map(({ id, icon: Icon }) => (
              <div
                key={id}
                onClick={() => setActive(id)}
                className={`cursor-pointer p-2 rounded-xl transition-colors ${active === id
                  ? "bg-white text-gray-900"
                  : "hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
              >
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>

          {/* Right controls in mobile */}
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex items-center gap-1 bg-gray-100 p-2 rounded-lg dark:text-gray-300 dark:bg-gray-700">
              <BsFileEarmarkImage className="w-4 h-4" />
              <span className="text-sm">Gallery</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 p-2 rounded-lg dark:text-gray-300 dark:bg-gray-700">
              <BiSupport className="w-4 h-4" />
              <span className="text-sm">Support</span>
            </div>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
            >
              {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
              <span className="text-sm">Toggle Theme</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
