import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StartRating from "./StarRating.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <StartRating maxRating={5} /> */}
    <StartRating maxRating={10} />
  </React.StrictMode>
);
