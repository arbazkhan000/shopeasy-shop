import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const item = useSelector((state) => state.cart);
  return (
    <div className="bg-[#2B2B2B] h-20 flex justify-between items-center p-4">
      <Link>
        <h1 className="text-[#FFFFFF] text-3xl font-medium">shopEasy</h1>
      </Link>

      <ul className="flex gap-10 text-[#FFFFFF] text-2xl font-medium">
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li className="flex items-center">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="mr-1" />
            <span>{item.length}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
