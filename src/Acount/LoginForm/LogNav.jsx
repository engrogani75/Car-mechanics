import { NavLink } from "react-router-dom";
import Logo from "../../Pages/Home/Nav/Logo";


const LogNav = () => {
    return (
        <div className="flex justify-between items-center">
            <Logo></Logo>
            <div>
            <ul className="flex gap-8 text-dark-600 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/Order"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Order
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/order-review  "
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
             Order Review  
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/Manage Inventory"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
            Manage Inventory
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
         Login
            </NavLink>
            
          </li>
          
        </ul>
            </div>
            
        </div>
    );
};

export default LogNav;