export interface Props {
    id?: string;
    type?: string;
    name?: string;
    defaultValue?: string;
    min?: string;
    max?: string;
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocusHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlurHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    disabled?: boolean;
};