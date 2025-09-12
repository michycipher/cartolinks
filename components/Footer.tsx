import { IoCard } from "react-icons/io5";
import { RiFolderUploadFill } from "react-icons/ri";

export default function Footer() {
  return (

    <footer>
      <section className="flex justify-between px-6 py-3">

        <p className="font-semibold text-lg">Gallery</p>

        <div className="hidden sm:flex items-center gap-3">
          {/* Legal */}
          <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-lg dark:text-gray-300 dark:bg-gray-700">
            <RiFolderUploadFill className="w-4 h-4" />
            <span className="text-xs">Legal</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-lg dark:text-gray-300 dark:bg-gray-700">
            <IoCard className="w-4 h-4" />
            <span className="text-xs">Pricing</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 border-t bg-[#2f2f2f] text-white dark:border-gray-800">
        <div className="flex flex-col items-center gap-y-4 md:flex-row md:justify-between md:gap-y-0">
          {/* Left side */}
          <div className="flex items-center gap-2 font-medium">
            <img src="/krea.png" alt="Krea logo" className="w-8 h-8 object-contain" />
            <span className="text-2xl md:text-3xl">Krea AI</span>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center gap-2 text-center text-lg md:flex-row md:text-2xl md:gap-3">
            <span className="text-white">curated by</span>
            <img
              src="/mobbin.png"
              alt="mobbin logo"
              className="w-20 h-10 object-contain"
            />
            <span>Mobbin</span>
          </div>
        </div>
      </section>

    </footer>
  );
}
