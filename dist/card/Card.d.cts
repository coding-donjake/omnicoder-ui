interface CardProps {
    cls?: string;
    variant?: "primary";
    header?: CardHeader;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
type CardHeader = {
    headless?: boolean;
    title?: React.ReactNode;
    component?: React.ReactNode;
};
declare const Card: React.FC<CardProps>;

export { Card as default };
