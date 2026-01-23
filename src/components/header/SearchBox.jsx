import { FaSearch } from "react-icons/fa";

function SearchBox() {
  return (
    <form className="hidden md:flex w-[400px] lg:w-[500px] h-[45px] items-center bg-[var(--bg-color)] rounded-[30px] border border-[var(--main-color)] overflow-hidden">
      <input
        type="text"
        placeholder="Search For Products"
        className="flex-1 h-full pl-5 pr-[60px] bg-transparent outline-none"
      />

      <button
        type="submit"
        className="h-full w-[60px] flex items-center justify-center bg-[var(--main-color)] text-white"
      >
        <FaSearch size={18} />
      </button>
    </form>
  );
}

export default SearchBox;
