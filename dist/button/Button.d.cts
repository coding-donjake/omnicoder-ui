interface ButtonProps {
    cls?: string;
    variant?: "primary" | "icon";
    color?: "primary" | "blue" | "green" | "red" | "yellow" | "purple";
    type?: "button" | "submit";
    icon?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<ButtonProps>;

export { Button as default };
