import {createContext, useState, useEffect} from "react";
import {
  onAuthStateChangedListener,
  createUserFromAuth,
} from "../utils/firebase/firebase.utils";

//? THE VALUE WE WANT TO ACCESS
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//? THIS IS THE FUNCTIONAL COMPONENT THAT WRAPS ALL THE COMPONENTS THAT WILL USE THE VALUE OF THE CONTEXT
export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
