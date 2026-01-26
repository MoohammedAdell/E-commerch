import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

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
  return (
    <div className="flex gap-4">
      {/* Wishlist (لسه static) */}
      <Icon count={0}>
        <FaRegHeart className="size-6" />
      </Icon>

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
