import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
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
  const location = useLocation();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        console.log(res);
        setGategorys(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelClick = () => {
    setShowGategory(!showGategory);
  };

  return (
    <div className="flex bg-[var(--main-color)] text-white">
      <div className="layout-container flex justify-between  items-center ">
        <nav className="nav h-[50px] gap-[50px] flex items-center">
          <div className="category_nav w-[220px] h-[100%] relative">
            <div
              onClick={handelClick}
              className="category_btn flex h-[100%] w-[100%] justify-between items-center bg-[var(--main-color)] px-3 cursor-pointer"
            >
              <IoMenu className="text-white" size={20} />
              <p className="text-white font-bold">Browse Category </p>
              <IoMdArrowDropdown size={20} />
            </div>
            {showGategory && (
              <div className="category_nav_list absolute top-[100%]  left-0 w-[100%] bg-white border border-[#999] border-t-0 flex flex-col    max-h-[400px] overflow-y-auto">
                {gategorys.map((gategory, i) => {
                  return (
                    <Link
                      className="p-2  text-[14px]  hover:text-[var(--p-color)]"
                      key={i}
                      to={gategory.slug}
                    >
                      {gategory.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="nav_links  h-[100%] items-center flex justify-between w-[400px] text-white ">
            {NavLinks.map((link, i) => {
              const isActive = location.pathname === link.link;
              return (
                <Link
                  key={i}
                  to={link.link}
                  className={`px-3 py-2 rounded-md transition ${isActive ? "bg-gray-400" : "hover:bg-gray-500"}`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="log-icon flex gap-[20px]">
          <Link className="text-[20px]" to="/">
            <MdOutlineLogin />
          </Link>
          <Link className="text-[20px]" to="/">
            <IoPersonAddSharp />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
