import { httpClient } from "../httpClient";

const getSliders = () => {
    return httpClient.get("/media/slider-images");
};

export { getSliders };
