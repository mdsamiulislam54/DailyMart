import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import {  DarkModeProvider } from "./componants/ContextApi/DarkModeApi.jsx";
import { WindowScrollYProvider } from "./componants/ContextApi/WindowScrollY.jsx";
import UserAuthentication from "./componants/ContextApi/UserAuthentication.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <WindowScrollYProvider>
          <UserAuthentication>
            <App />
          </UserAuthentication>
        </WindowScrollYProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>
);
