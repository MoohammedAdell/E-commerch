import { useContext } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

function DetailsProduct({ product }) {
  const { favorites, addToFav, removeIntoFav, cartItems, addItem } =
    useContext(CartContext);

  const { title, images, id } = product;

  const isInCart = cartItems.some((i) => i.id === id);
  const isInFav = favorites.some((i) => i.id === id);

  const addToCart = () => {
    if (isInCart) return;

    addItem(product);

    toast.success(
      <div className="flex items-center gap-4">
        <img
          src={images[0]}
          alt={title}
          className="w-12 h-12 object-contain"
        />

        <div className="flex flex-col gap-1">
          <h5 className="text-sm font-semibold line-clamp-1">{title}</h5>
          <p className="text-xs text-gray-500">
            Added to cart successfully
          </p>

          <Link
            to="/cart"
            className="text-xs text-blue-600 underline"
          >
            View Cart
          </Link>
        </div>
      </div>
    );
  };

  const handelAppToFav = () => {
    if (isInFav) {
      removeIntoFav(product.id);
      toast.error(`${title} removed from favorites 💔`);
    } else {
      addToFav(product);
      toast.success(`${title} added to favorites ❤️`);
    }
  };

  return (
    <div className="space-y-5">

      {/* Title + Heart */}
      <div className="flex items-start justify-between">
        <h1 className="text-3xl font-bold text-blue-600">
          {title}
        </h1>

        <span
          onClick={handelAppToFav}
          className={`cursor-pointer text-2xl transition ${
            isInFav
              ? "text-red-500 scale-110"
              : "text-gray-400 hover:text-red-500"
          }`}
        >
          {isInFav ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-400 text-lg">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStarOutline />
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold text-gray-900">
        ${product.price}
      </p>

      {/* Info */}
      <div className="space-y-1 text-gray-700">
        <p>
          Availability:
          <span className="ml-2 text-green-600 font-medium">
            In Stock
          </span>
        </p>

        <p>
          Brand:
          <span className="ml-2 text-blue-500 font-medium">
            {product.brand}
          </span>
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {product.description}
      </p>

      {/* Stock */}
      <p className="text-blue-600 font-semibold">
        Hurry Up! Only {product.stock} products left.
      </p>

      {/* Add To Cart */}
      <button
        onClick={addToCart}
        disabled={isInCart}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition
          ${
            !isInCart
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-blue-600 text-blue-600 cursor-not-allowed"
          }
        `}
      >
        <TiShoppingCart size={20} />
        {isInCart ? "Item in Cart" : "Add To Cart"}
      </button>
    </div>
  );
}

export default DetailsProduct;