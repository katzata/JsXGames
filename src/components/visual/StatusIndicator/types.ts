export interface Props extends React.PropsWithChildren {
    status: boolean;
    size: string;
};

export interface StatusStyles {
    width: string;
    height: string;
    border: string;
    fill: string;
    stroke: string;
};

export interface ScanLinesStyles {
    boxShadow: string;
    backgroundImage: string;
};