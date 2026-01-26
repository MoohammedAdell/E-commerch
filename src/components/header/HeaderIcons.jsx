import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Icon({ children, count }) {
  return (
    <div className="relative cursor-pointer">
      {children}

      {count > 0 && (
        <span
          className="absolute -top-1 -right-1 bg-[var(--main-color)]
          !text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"
        >
          {count}
        </span>
      )}
    </div>
  );
}

function HeaderIcons({ cartItems }) {
  const { favorites } = useContext(CartContext);

  return (
    <div className="flex gap-4">
      <Link to="/favorites">
        <Icon count={favorites.length}>
          <FaRegHeart className="size-6" />
        </Icon>
      </Link>

      {/* Cart */}
      <Link to="/cart">
        <Icon count={cartItems.length}>
          <TiShoppingCart className="size-6" />
        </Icon>
      </Link>
    </div>
  );
}

export default HeaderIcons;
