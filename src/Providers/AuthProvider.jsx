import { createContext, useState } from "react";
import app from "../Firbase/firebase.config";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";



export const AuthContex = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const creatUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
    }

   
    const authInfo = {
        user,
        loading,
        creatUser
    }
    return (
      <AuthContex.Provider value={authInfo}>
        {children}
        </AuthContex.Provider>
    );

};

export default AuthProvider;