import img from "../../img/iphone.png";
import { IoMdStar } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

function Product({ item }) {
  console.log(item);
  const { title, images, price } = item;
  return (
    <div
      className="
      group
  relative 
  w-full
  max-w-[260px]
  mx-auto
  py-[25px] 
  px-[15px] 
  border 
  border-[var(--border-color)] 
  rounded-3xl
  hover:border-[var(--main-color)]
"
    >
      {/* Image */}
      <div className="relative h-[180px] px-[20px] flex items-center justify-center mb-[30px]">
        <img src={images[0]} alt="img Product" className="h-[160px] w-auto" />
      </div>

      {/* Title */}
      <p className="mb-[10px] text-lg text-[var(--main-color)] line-clamp-1">
        {title}
      </p>

      {/* Rating */}
      <div className="flex pb-4 text-yellow-400 text-[18px]">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStarOutline />
      </div>

      {/* Price */}
      <p className="text-[var(--main-color)] text-lg md:text-2xl">$ {price}</p>

      {/* Actions */}
      <div
        className="
          absolute
          top-1/2
          right-3
          -translate-y-1/2
          flex
          flex-col
          items-center
          gap-6
          text-2xl
          opacity-0
          translate-x-4
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-x-0
        "
      >
        <span className="cursor-pointer hover:text-[var(--main-color)]">
          <IoCartSharp />
        </span>
        <span className="cursor-pointer hover:!text-red-500">
          <FaRegHeart />
        </span>
        <span className="cursor-pointer hover:text-[var(--main-color)]">
          <IoIosShareAlt />
        </span>
      </div>
    </div>
  );
}

export default Product;
