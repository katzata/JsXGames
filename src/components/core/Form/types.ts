export interface Props extends React.PropsWithChildren {
    method?: string;
    url?: string;
    title?: string;
    target?: string;
    submitButtonContent?: string | number | JSX.Element;
    submitHandler: (data: any) => void;
    disabled?: boolean;
};