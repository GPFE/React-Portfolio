import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import theme from "./theme.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ChakraProvider>
  </StrictMode>,
);
