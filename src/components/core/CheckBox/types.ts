export interface Props {
    name?: string;
    size?: number;
    readOnly?: boolean;
    disabled?: boolean;
    onChangeHandler?: (e: React.ChangeEvent) => void
};