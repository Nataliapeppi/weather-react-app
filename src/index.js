import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import React from "react";
import Weather from "./Weather";

import "./App.css";
import "./index.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <small>
        <a
          href="https://github.com/Nataliapeppi/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Natalia Peppi
      </small>
    </div>
  </StrictMode>
);
