import { NavLink, useNavigate } from "react-router";

const Navber = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 px-4 py-2 rounded-xl shadow font-semibold"
                      : "text-gray-700 hover:text-blue-600 px-4 py-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 px-4 py-2 rounded-xl shadow font-semibold"
                      : "text-gray-700 hover:text-blue-600 px-4 py-2"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 px-4 py-2 rounded-xl shadow font-semibold"
                      : "text-gray-700 hover:text-blue-600 px-4 py-2"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-yellow-500 font-serif">Testy Meal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-600 px-4 py-2 rounded-xl shadow font-semibold"
                    : "text-gray-700 hover:text-blue-600 px-4 py-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-600 px-4 py-2 rounded-xl shadow font-semibold"
                    : "text-gray-700 hover:text-blue-600 px-4 py-2"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-600 px-4 py-2 rounded-xl shadow font-semibold"
                    : "text-gray-700 hover:text-blue-600 px-4 py-2"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/food"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-600 px-4 py-2 rounded-xl shadow font-semibold"
                    : "text-gray-700 hover:text-blue-600 px-4 py-2"
                }
              >
                Food
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={()=>{navigate(-1)}} className="btn">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
