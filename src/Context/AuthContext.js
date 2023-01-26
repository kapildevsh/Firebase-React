import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged , signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../firebase";
import { async } from "@firebase/util";
import { useEffect } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [currentUser, SetCurrentUser] = useState({});
 // const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetCurrentUser(user);
    });
    
  }, []);

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (e) {
      return Promise.reject(e.message);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch (e) {
      return Promise.reject(e.message);
    }
  };


  const value = {
    currentUser,
    signUp,
    login
  };
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
