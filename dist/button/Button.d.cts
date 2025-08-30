interface ButtonProps {
    cls?: string;
    type?: "button" | "submit";
    icon?: React.ReactNode;
    loadingIcon?: React.ReactNode;
    loading?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    config?: ButtonConfig;
}
type ButtonConfig = {
    variant?: "primary" | "icon";
    color?: "primary" | "blue" | "green" | "red" | "yellow" | "purple";
    alignContent?: "left" | "center" | "right";
    iconPosition?: "left" | "right";
    edgeIcon?: boolean;
};
declare const Button: React.FC<ButtonProps>;

export { Button as default };
