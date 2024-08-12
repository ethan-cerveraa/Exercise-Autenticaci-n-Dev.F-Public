import React, { createContext, useState, useEffect } from "react";

const SignUpContext = createContext();

const SignUpProvider = ({ children }) => {
  const [authenticatedUsers, setAuthenticatedUsers] = useState([]);

  useEffect(() => {
    const currentUsers = JSON.parse(localStorage.getItem("signedupUsers"));
    if (currentUsers && currentUsers.length > 0) {
      setAuthenticatedUsers(currentUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("signedupUsers", JSON.stringify(authenticatedUsers));
  }, [authenticatedUsers]);

  return (
    <SignUpContext.Provider
      value={{ authenticatedUsers, setAuthenticatedUsers }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export { SignUpContext, SignUpProvider };
