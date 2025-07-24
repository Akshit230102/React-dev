import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-30">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex ">
          <li className="text-2xl m-5 p-1 hover:bg-pink-50 hover:rounded-xl"><Link to="/">Home</Link></li>
          <li className="text-2xl m-5 p-1 hover:bg-pink-50 hover:rounded-xl"><Link to="/about">About Us</Link></li>
          <li className="text-2xl m-5 p-1 hover:bg-pink-50 hover:rounded-xl"><Link to="/contact">Contact Us</Link></li>
          <li className="text-2xl m-5 p-1">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
