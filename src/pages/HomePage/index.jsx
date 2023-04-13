import React from "react";
import Slider from "./components/Slider";
import Intro from "./components/Intro";
import Advantage from "./components/Advantage";

import useLang from "@/hooks/useLang";

const HomePage = () => {
    const { currentLang, onChangeLang } = useLang();

    console.log({ currentLang, onChangeLang });

    return (
        <div>
            <Slider />

            <Intro />

            <Advantage />
        </div>
    );
};

export default HomePage;
