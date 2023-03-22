export interface Props {
    id?: string;
    name?: string;
    options?: Array<Array<string>>;
    changeHandler?: (e: React.ChangeEvent) => void;
    defaultValue?: string;
};