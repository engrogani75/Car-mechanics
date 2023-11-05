import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../../../Providers/AuthProvider";


const Navbar = () => {
  const {user, singOut} = useContext(AuthContex)

  const signOutHandle = () =>{
    singOut()
    .then(() =>{

    })
    .catch(error =>{
      console.error(error);
    })
  }


    return (
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
              to="/services"
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
              Contact
            </NavLink>
          </li>

          {
          user?.email ? <>   
          <li>
          <NavLink
            to="/orderBook"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Order
          </NavLink>
        </li>
        <li>
              <button onClick={signOutHandle} className="bg-orange-700 text-3xl text-white px-4 py-2 rounded-xl">
                Logout
              </button>
            </li></>
        
         : 
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
          }
        </ul>
      </div>
    );
};

export default Navbar;