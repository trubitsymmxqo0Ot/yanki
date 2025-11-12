import { useTranslation } from "react-i18next";

export interface FooterProps {
    className: string;
}

export const Footer = (props: FooterProps) => {
    const {className} = props;
    const {t} = useTranslation();
    return (
        <div className={className}>
            <div>{t("this is footer")}</div>
        </div>
    )
}