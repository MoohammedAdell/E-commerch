import { FaRegHeart } from "react-icons/fa";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

function DetailsProduct({ product }) {
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
      <button className="!bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Add To Cart
      </button>
      <span className="cursor-pointer hover:!text-red-500 ">
        <FaRegHeart scale={1} size={20} className="mt-4 " />
      </span>
    </div>
  );
}

export default DetailsProduct;
