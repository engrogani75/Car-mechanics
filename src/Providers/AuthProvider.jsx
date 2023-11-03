import { createContext, useEffect, useState } from "react";
import app from "../Firbase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";



export const AuthContex = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const creatUser = (email, password) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() =>{
       const unsubscribe =  onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser)
            console.log('current User', currentuser);
            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }
    },[])


    const singin = (email, password) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email ,password)
    }

   
    const authInfo = {
        user,
        loading,
        creatUser,
        singin
    }
    return (
      <AuthContex.Provider value={authInfo}>
        {children}
        </AuthContex.Provider>
    );

};

export default AuthProvider;