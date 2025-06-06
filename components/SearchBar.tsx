import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <section className="flex items-center bg-white rounded-full shadow-md px-2 py-2 w-full max-w-3xl mx-auto my-24">
      {/* Where to */}
      <div className="flex-1 flex flex-col pl-6">
        <div className="bg-white rounded-full transition-shadow duration-200 hover:shadow-lg focus-within:shadow-lg flex flex-col justify-center px-4 py-3">
          <span className="font-semibold text-[#003A56] text-lg">Where to?</span>
          <input
            type="text"
            placeholder="Search for a Place of Activity"
            className="bg-transparent outline-none text-[#7A8A99] text-sm placeholder-[#7A8A99] mt-1 w-full"
          />
        </div>
      </div>
      {/* Divider */}
      <div className="h-12 w-px bg-[#003A56]/30 mx-4" />
      {/* When */}
      <div className="flex-1 flex flex-col pr-6">
        <div className="bg-white rounded-full transition-shadow duration-200 hover:shadow-lg focus-within:shadow-lg flex flex-col justify-center px-4 py-3">
          <span className="font-semibold text-[#003A56] text-lg">When?</span>
          <input
            type="text"
            placeholder="Select dates"
            className="bg-transparent outline-none text-[#7A8A99] text-sm placeholder-[#7A8A99] mt-1 w-full"
          />
        </div>
      </div>
      {/* Search Button */}
      <button className="ml-4 bg-[#003A56] rounded-full w-12 h-12 flex items-center justify-center">
        <FaSearch className="text-white text-xl" />
      </button>
    </section>
  );
} 