import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function Product({ item }) {
  const { title, images, price, id } = item;
  const { cartItems, addItem } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === id);

 const addToCart = () => {
  !isInCart && addItem(item);

  toast.success(
    <div className="flex items-center gap-4">
      {/* Image */}
      <img
        src={images[0]}
        alt={title}
        className="w-12 h-12 object-contain"
      />

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h5 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {title}
        </h5>
        <p className="text-xs text-gray-500">
          Added to cart successfully
        </p>

        <Link
          to="/cart"
          className="mt-1 inline-block w-fit rounded-lg bg-black px-3 py-1 text-xs font-medium text-white transition hover:bg-gray-800"
        >
          View Cart
        </Link>
      </div>
    </div>,
    {
      duration: 3500,
      style: {
        borderRadius: "16px",
        padding: "14px",
      },
    }
  );
};

  return (
    <div
      className={`
        group relative w-full max-w-[260px] mx-auto
        py-[25px] px-[15px]
        border rounded-3xl
        transition
        ${
          isInCart
            ? "border-green-500 bg-green-50"
            : "border-[var(--border-color)] hover:border-[var(--main-color)]"
        }
      `}
    >
      {/* ✔ In Cart Badge */}
      {isInCart && (
        <span className="absolute top-3 left-3  text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          ✔ In Cart
        </span>
      )}

      <Link to={`/products/${id}`}>
        {/* Image */}
        <div className="relative h-[180px] px-[20px] flex items-center justify-center mb-[30px]">
          <img src={images[0]} alt={title} className="h-[160px] w-auto" />
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
        <p className="text-[var(--main-color)] text-lg md:text-2xl">
          $ {price}
        </p>
      </Link>

      {/* Actions */}
      <div
        className="
          absolute top-1/2 right-3 -translate-y-1/2
          flex flex-col items-center gap-6 text-2xl
          transition-all duration-300
          group-hover:opacity-100 group-hover:translate-x-0
          opacity-0 translate-x-4
        "
      >
        {/* Add to cart */}
        <span
          onClick={addToCart}
          className={`
            p-2 rounded-full transition
            ${
              isInCart
                ? "bg-green-500 !text-white cursor-not-allowed"
                : "cursor-pointer hover:bg-[var(--main-color)] hover:!text-white"
            }
          `}
        >
          <IoCartSharp />
        </span>

        {/* Wishlist */}
        <span className="cursor-pointer hover:text-red-500">
          <FaRegHeart />
        </span>

        {/* Share */}
        <span className="cursor-pointer hover:text-[var(--main-color)]">
          <IoIosShareAlt />
        </span>
      </div>
    </div>
  );
}

export default Product;
