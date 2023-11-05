import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContex)

    if (loading) {
       return <h1 className="text-2xl font-bold text-orange-600">This pafge is loading...........................</h1> 
    }

    if (user?.email) {
       return children 
    }

    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;