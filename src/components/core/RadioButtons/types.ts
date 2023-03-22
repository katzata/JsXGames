export interface Props {
    id?: string;
    name?: string;
    options: string[];
    changeHandler: (e: React.ChangeEvent) => void;
    defaultValue?: string;
};