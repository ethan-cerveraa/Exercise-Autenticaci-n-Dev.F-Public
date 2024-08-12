import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

const Header = () => {
  const { loggedin, setLoggedin } = useContext(LoginContext);

  return (
    <div className="absolute top-0 py-5 flex bg-indigo-300 w-full justify-end pe-5">
      <div className="flex gap-5">
        {loggedin && (
          <NavLink to={"./"}>
            <button className="p-3 rounded-md bg-orange-200">Home</button>
          </NavLink>
        )}
        {loggedin && (
          <NavLink to={"./notloggedinpage"}>
            <button
              className="p-3 rounded-md bg-orange-200"
              onClick={() => setLoggedin(false)}
            >
              Logout
            </button>
          </NavLink>
        )}
        {!loggedin && (
          <NavLink to={"./login"}>
            <button className="p-3 rounded-md bg-orange-200">Login</button>
          </NavLink>
        )}
        {!loggedin && (
          <NavLink to={"./signup"}>
            <button className="p-3 rounded-md bg-orange-200">Signup</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
