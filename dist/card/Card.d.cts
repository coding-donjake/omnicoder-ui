interface CardProps {
    cls?: string;
    variant?: "primary";
    headless?: boolean;
    title?: React.ReactNode;
    footless?: boolean;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;

export { Card as default };
