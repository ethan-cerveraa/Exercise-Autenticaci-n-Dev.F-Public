import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { SignUpContext } from "../contexts/SignUpContext";

const schema = yup
  .object({
    username: yup
      .string("just characters allowed")
      .required("enter your username"),
    password: yup
      .string()
      .required("please enter your password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/,
        "password must be 8 chars minimum, at least one number, one uppercase, one lowercase and one special character"
      ),
  })
  .required();

const Signup = () => {
  const { setLoggedin } = useContext(LoginContext);
  const { setAuthenticatedUsers } = useContext(SignUpContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newUser = {
      username: data.username,
      password: data.password,
    };
    setAuthenticatedUsers((prev) => [...prev, newUser]);
    setLoggedin(true);
    navigate("/");
  };

  return (
    <div className="mt-56 flex items-center flex-col">
      <div>Sign up</div>

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
    </div>
  );
};

export default Signup;
