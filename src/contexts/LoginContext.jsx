import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedin, setLoggedin }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
