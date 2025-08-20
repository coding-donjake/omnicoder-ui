interface ScreenProps {
    cls?: string;
    theme?: "light" | "dark";
    children?: React.ReactNode;
}
declare const Screen: React.FC<ScreenProps>;

export { Screen as default };
