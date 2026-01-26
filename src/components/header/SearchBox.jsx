/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSuggestion([]);
    }
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestion([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await res.json();
        setSuggestion(data.products?.slice(0, 6) || []);
      } catch (error) {
        console.error(error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <div className="relative hidden md:block w-[400px] lg:w-[500px]">
      {/* Search Form */}
      <form
        onSubmit={handelSubmit}
        className="flex h-[45px] items-center bg-[var(--bg-color)] rounded-full border border-[var(--main-color)] overflow-hidden"
      >
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search for products..."
          className="flex-1 h-full pl-5 pr-[60px] bg-transparent outline-none text-sm"
        />

        <button
          type="submit"
          className="h-full w-[60px] flex items-center justify-center bg-[var(--main-color)] text-white"
        >
          <FaSearch size={18} />
        </button>
      </form>

      {/* Suggestions */}
      {suggestion.length > 0 && (
        <ul className="
          absolute
          top-full
          mt-2
          w-full
          bg-white
          rounded-2xl
          shadow-xl
          border
          z-50
          overflow-hidden
        ">
          {suggestion.map((item) => (
           <li
  key={item.id}
  onClick={() => {
    navigate(`/products/${item.id}`);
    setSuggestion([]);
    setSearchTerm("");
  }}
  className="
    flex
    items-center
    gap-8
    px-4
    py-2
    cursor-pointer
    hover:bg-gray-100
    transition
  "
>
  {/* Text (left) */}
  <div className="flex flex-col flex-1 text-left">
    <span className="text-sm font-medium truncate">
      {item.title}
    </span>
    <span className="text-xs text-gray-500">
      ${item.price}
    </span>
  </div>

  {/* Image (right & small) */}
  <img
    src={item.thumbnail}
    alt={item.title}
    className="w-8 h-8 object-contain"
  />
</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;