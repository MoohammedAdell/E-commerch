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
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BtmHeader() {
  const [gategorys, setGategorys] = useState([]);
  const [showGategory, setShowGategory] = useState(false); // desktop
  const [showMobileCategory, setShowMobileCategory] = useState(false); // mobile
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();
  const categoryRef = useRef(null);

  // Fetch Categories
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setGategorys(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Close desktop category on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setShowGategory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ===== Header ===== */}
      <div className="bg-[var(--main-color)] text-white shadow-md">
        <div className="layout-container flex justify-between items-center h-[56px]">

          {/* ===== Left ===== */}
          <div className="flex items-center gap-6">

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded hover:bg-white/20 transition"
              onClick={() => {
                setMobileMenu(!mobileMenu);
                setShowMobileCategory(false);
              }}
            >
              <IoMenu size={26} />
            </button>

            {/* ===== Desktop Category ===== */}
            <div
              ref={categoryRef}
              className="relative hidden lg:block w-[230px]"
            >
              <div
                onClick={() => setShowGategory(!showGategory)}
                className="flex items-center justify-between h-[42px] px-4 bg-white text-[var(--main-color)] rounded-lg cursor-pointer font-semibold"
              >
                <div className="flex items-center gap-2">
                  <IoMenu size={18} />
                  Browse Category
                </div>
                <IoMdArrowDropdown
                  size={20}
                  className={`transition ${
                    showGategory ? "rotate-180" : ""
                  }`}
                />
              </div>

              {showGategory && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white text-black rounded-xl shadow-lg z-50 max-h-[350px] overflow-y-auto">
                  {gategorys.map((cat, i) => (
                    <Link
                      key={i}
                      to={`/category/${cat.slug}`}
                      onClick={() => setShowGategory(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[var(--main-color)] transition"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ===== Desktop Nav ===== */}
            <div className="hidden lg:flex items-center gap-2">
              {NavLinks.map((link, i) => {
                const isActive = location.pathname === link.link;
                return (
                  <Link
                    key={i}
                    to={link.link}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-[var(--main-color)]"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ===== Right ===== */}
          <div className="flex items-center gap-4 text-xl">
            <Link className="p-2 rounded hover:bg-white/20 transition" to="/">
              <MdOutlineLogin />
            </Link>
            <Link className="p-2 rounded hover:bg-white/20 transition" to="/">
              <IoPersonAddSharp />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {mobileMenu && (
        <div className="lg:hidden bg-[var(--main-color)] text-white shadow-lg">
          <div className="flex flex-col gap-2 p-4">

            {NavLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                onClick={() => setMobileMenu(false)}
                className="py-2 px-4 rounded-lg hover:bg-white/20 transition"
              >
                {link.title}
              </Link>
            ))}

            <div className="border-t border-white/30 my-2" />

            {/* ===== Mobile Category ===== */}
            <button
              onClick={() =>
                setShowMobileCategory(!showMobileCategory)
              }
              className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-white/20 transition"
            >
              <span className="font-semibold !text-white">Browse Category</span>
              <IoMdArrowDropdown
                className={`transition ${
                  showMobileCategory ? "rotate-180" : ""
                }`}
              />
            </button>

            {showMobileCategory && (
              <div className="bg-white text-black rounded-lg overflow-hidden">
                {gategorys.map((cat, i) => (
                  <Link
                    key={i}
                    to={`/category/${cat.slug}`}
                    onClick={() => {
                      setShowMobileCategory(false);
                      setMobileMenu(false);
                    }}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
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