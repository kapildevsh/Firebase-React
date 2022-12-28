import { createContext, useContext, useState } from "react";
import {createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";
import { async } from "@firebase/util";
import { useEffect } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [currentUser, SetCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      SetCurrentUser(user);
    });
  }, []);

  const signUp = async (email, password) => {
    //const user = await createUserWithEmailAndPassword(auth, email, password);
     await  createUserWithEmailAndPassword(auth,email,password);
   // console.log(user);
  };
  const value = {
    currentUser,
    signUp,
  };
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
