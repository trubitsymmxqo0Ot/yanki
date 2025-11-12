import { useTranslation } from "react-i18next"

export const MainHeader = () => {
    const {t} = useTranslation();
    return (
        <div>
            {t("some content")}
        </div>
    )
}