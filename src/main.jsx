import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-slideshow-image/dist/styles.css";
import { LangProvider } from "./contexts/lang";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LangProvider>
            <App />
        </LangProvider>
    </React.StrictMode>
);
