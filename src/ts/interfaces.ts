export interface PropsSize {
    size: number;
};

export interface PropsWidthHeight {
    width: number;
    height: number;
};

export interface PropsChildrenSize extends React.PropsWithChildren {
    size: number;
};

export interface PropsChildrenWidthHeight extends React.PropsWithChildren {
    width: number;
    height: number;
};