import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import MainPage from "./components/MainPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <MainPage />
      {/* <Dasboard/> */}
      {/* <GetCurrentLocation/> */}
    </ChakraBaseProvider>
  </React.StrictMode>
);
