import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SignUpProvider } from "./contexts/SignUpContext.jsx";
import { LoginContextProvider } from "./contexts/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <SignUpProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SignUpProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
