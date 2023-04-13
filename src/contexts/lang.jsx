import { createContext, useState } from "react";

const LangContext = createContext({ currentLang: "vi" });

const LangProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState("vi");

    const handleChangeLang = (lang) => {
        setCurrentLang(lang);
    };

    return (
        <LangContext.Provider
            value={{ currentLang, onChangeLang: handleChangeLang }}
        >
            {children}
        </LangContext.Provider>
    );
};

export { LangContext, LangProvider };
