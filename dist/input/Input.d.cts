interface InputProps {
    cls?: string;
    variant?: "primary";
    type?: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "text" | "time" | "week";
    id: string;
    label?: string;
    placeholder?: string;
    min?: number;
    max?: number;
    value?: number | string | readonly string[];
    icon?: React.ReactNode;
    loadingIcon?: React.ReactNode;
    required?: boolean;
    readOnly?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
declare const Input: React.FC<InputProps>;

export { Input as default };
