import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import "react-slideshow-image/dist/styles.css";
import { LangProvider } from "./contexts/lang";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <LangProvider>
                <App />
            </LangProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
