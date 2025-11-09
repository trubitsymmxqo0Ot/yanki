export interface FooterProps {
    className: string;
}

export const Footer = (props: FooterProps) => {
    const {className} = props;
    return (
        <div className={className}>
            <div>this is footer</div>
        </div>
    )
}