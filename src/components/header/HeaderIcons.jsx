import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

function Icon({ children, count }) {
  return (
    <div className="relative cursor-pointer">
      {children}
      <span className="absolute -top-1 -right-1 bg-[var(--main-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
        {count}
      </span>
    </div>
  );
}

function HeaderIcons() {
  return (
    <div className="flex gap-4">
      <Icon count={0}>
        <FaRegHeart className="size-6" />
      </Icon>

      <Icon count={0}>
        <TiShoppingCart className="size-6" />
      </Icon>
    </div>
  );
}

export default HeaderIcons;
