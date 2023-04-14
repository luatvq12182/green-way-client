import axios from "axios";

const httpClient = axios.create({
    baseURL: `${import.meta.env.VITE_SERVICE}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

export { httpClient };
