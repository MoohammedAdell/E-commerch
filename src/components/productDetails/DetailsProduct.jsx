import { useContext } from "react";
import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

function DetailsProduct({ product }) {
  const { cartItems, addItem } = useContext(CartContext);
  const { title, images, id } = product;
  const isInCart = cartItems.some((i) => i.id === id);

  const addToCart = () => {
    !isInCart && addItem(product);

    !isInCart &&
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
            <p className="text-xs text-gray-500">Added to cart successfully</p>

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
        },
      );
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600 mb-3">{product.title}</h1>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-400 text-lg mb-3">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStarOutline />
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold mb-4">${product.price}</p>

      {/* Info */}
      <p className="mb-2 text-gray-700">
        Availability:{" "}
        <span className="!text-green-600 font-medium">In Stock</span>
      </p>

      <p className="mb-2 text-gray-700">
        Brand:{" "}
        <span className="!text-blue-500 font-medium">{product.brand}</span>
      </p>

      {/* Description */}
      <p className="!text-gray-600 leading-relaxed mb-4">
        {product.description}
      </p>

      {/* Stock warning */}
      <p className="!text-blue-600 font-semibold mb-6">
        Hurry Up! Only {product.stock} products left in stock.
      </p>

      {/* Button */}
      <button
        onClick={addToCart}
        disabled={isInCart}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition
    ${
      !isInCart
        ? "!bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
        : "bg-transparent border border-blue-600 text-blue-600 cursor-not-allowed"
    }
  `}
      >
        <TiShoppingCart size={20} />
        {!isInCart ? "Add To Cart" : "Item in Cart"}
      </button>
      <span className="cursor-pointer hover:!text-red-500 ">
        <FaRegHeart scale={1} size={20} className="mt-4 " />
      </span>
    </div>
  );
}

export default DetailsProduct;
