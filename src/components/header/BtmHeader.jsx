import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BtmHeader() {
  const [gategorys, setGategorys] = useState([]);
  const [showGategory, setShowGategory] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const categoryRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setGategorys(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ اقفل الـ dropdown لما ادوس برّه
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setShowGategory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ===== Header ===== */}
      <div className="bg-[var(--main-color)] text-white">
        <div className="layout-container flex justify-between items-center h-[50px]">

          {/* ===== Left ===== */}
          <div className="flex items-center gap-6">

            {/* Mobile Menu Button */}
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <IoMenu size={26} />
            </div>

            {/* Browse Category */}
            <div
              ref={categoryRef}
              className="category_nav w-[220px] h-[50px] relative hidden lg:block"
            >
              <div
                onClick={() => setShowGategory(!showGategory)}
                className="flex h-full w-full justify-between items-center px-3 cursor-pointer select-none"
              >
                <IoMenu size={20} />
                <p className="font-bold">Browse Category</p>
                <IoMdArrowDropdown
                  size={20}
                  className={`transition ${showGategory ? "rotate-180" : ""}`}
                />
              </div>

              {showGategory && (
                <div className="absolute top-full left-0 w-full bg-white text-black border border-[#999] border-t-0 flex flex-col max-h-[400px] overflow-y-auto z-50">
                  {gategorys.map((cat, i) => (
                    <Link
                      key={i}
                      to={cat.slug}
                      onClick={() => setShowGategory(false)}
                      className="p-2 text-sm hover:bg-gray-100 hover:text-[var(--main-color)]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-6">
              {NavLinks.map((link, i) => {
                const isActive = location.pathname === link.link;
                return (
                  <Link
                    key={i}
                    to={link.link}
                    className={`px-3 py-2 rounded transition ${
                      isActive ? "bg-blue-400" : "hover:bg-blue-300"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ===== Right ===== */}
          <div className="flex gap-5 text-xl">
            <Link to="/">
              <MdOutlineLogin />
            </Link>
            <Link to="/">
              <IoPersonAddSharp />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {mobileMenu && (
  <div className="lg:hidden bg-[var(--main-color)] text-white">
    <div className="flex flex-col gap-2 p-4">

      {/* Nav Links */}
      {NavLinks.map((link, i) => (
        <Link
          key={i}
          to={link.link}
          onClick={() => setMobileMenu(false)}
          className="py-2 px-3 rounded hover:bg-blue-400"
        >
          {link.title}
        </Link>
      ))}

      <div className="border-t border-white/30 my-2"></div>

      {/* 🔥 Browse Category - Mobile */}
      <div
        onClick={() => setShowGategory(!showGategory)}
        className="flex items-center justify-between py-2 px-3 cursor-pointer hover:bg-blue-400 rounded"
      >
        <span className="font-semibold">Browse Category</span>
        <IoMdArrowDropdown
          className={`transition ${showGategory ? "rotate-180" : ""}`}
          size={20}
        />
      </div>

      {/* Categories Dropdown */}
      {showGategory && (
        <div className="flex flex-col bg-blue-500 rounded mt-1">
          {gategorys.map((cat, i) => (
            <Link
              key={i}
              to={cat.slug}
              onClick={() => {
                setMobileMenu(false);
                setShowGategory(false);
              }}
              className="py-2 px-4 text-sm hover:bg-blue-600"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
)}

    </>
  );
}

export default BtmHeader;
