import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import HeaderIcons from "./HeaderIcons";

function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="flex items-center justify-between py-2.5 md:py-4">
          <Link to="/" className="w-40">
            <img src={Logo} alt="Logo" />
          </Link>

          <SearchBox />
          <HeaderIcons />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
