import { useTranslation } from "react-i18next";

export interface MainBodyProps {
    className: string;
}

export const MainBody = () => {
    const {t} = useTranslation();
    return (
        <div>
            {t("Some body content")}
        </div>
    )
}