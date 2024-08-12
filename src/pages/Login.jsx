import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { SignUpContext } from "../contexts/SignUpContext";
import Home from "./Home";

// const schema = yup
//   .object({
//     username: yup
//       .string("just characters allowed")
//       .required("enter your username"),
//     password: yup
//       .string()
//       .required("please enter your password")
//       .min(8, "Password is too short - should be 8 chars minimum.")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/,
//         "password must be 8 chars minimum, at least one number, one uppercase, one lowercase and one special character"
//       ),
//   })
//   .required();

const Login = () => {
  const { setLoggedin, loggedin } = useContext(LoginContext);
  const { authenticatedUsers } = useContext(SignUpContext);
  const [showNotFound, setShowNotFound] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(/* {
    resolver: yupResolver(schema),
  } */);

  const onSubmit = (data) => {
    if (authenticatedUsers.length > 0) {
      if (authenticatedUsers.some((user) => (user.username === data.username))) {
        setLoggedin(true);
        navigate("/");
      } else {
        setShowNotFound(true);
      }
    }
  };

  return (
    <div className="mt-56 flex items-center flex-col">
      <div>Log in</div>

      <form
        className="w-1/6 flex flex-col bg-blue-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="username">Username</label>
        <input
          className="border border-gray-500"
          type="text"
          id="username"
          {...register("username")}
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          className="border border-gray-500"
          type="password"
          id="password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button className="mt-5 w-1/2 bg-white border border-gray-800 mx-auto">
          Submit
        </button>
      </form>
      {showNotFound && <div>User not found, sign up first</div>}
    </div>
  );
};

export default Login;
