import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <div>
        <ul className="flex gap-8 text-dark-600 font-bold">
          <li>
            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
             Services 
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
             Blogs
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
           Contact
            </NavLink>
            
          </li>
          
        </ul>
      </div>
    );
};

export default Navbar;