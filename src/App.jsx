import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./Layouts/Layout";
import HomeNotAuth from "./pages/HomeNotAuth";
import { LoginContext } from "./contexts/LoginContext";

function App() {
  const { loggedin } = useContext(LoginContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={loggedin ? <Home /> : <HomeNotAuth />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="notloggedinpage" element={<HomeNotAuth />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
