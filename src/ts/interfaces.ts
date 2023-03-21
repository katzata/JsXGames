export interface PropsSize {
    size: number;
};

export interface PropsEventHandlerChildren extends React.PropsWithChildren {
    eventHandler: (e: React.MouseEvent | React.KeyboardEvent) => void;
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