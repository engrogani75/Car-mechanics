import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Acount/LoginForm/Login";


const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Layout;