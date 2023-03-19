export interface PropsWidthHeight {
    width: number;
    height: number;
};

export interface PropsChildrenWidthHeight extends React.PropsWithChildren {
    width: number;
    height: number;
};