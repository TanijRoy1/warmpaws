import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Contexts/AuthProvider";
import 'animate.css';

  
    

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
