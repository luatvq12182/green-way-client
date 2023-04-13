import { useContext } from "react";
import { LangContext } from "@/contexts/lang";

const useLang = () => {
    const { currentLang, onChangeLang } = useContext(LangContext);

    return { currentLang, onChangeLang };
};

export default useLang;
