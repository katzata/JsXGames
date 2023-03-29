export interface Props extends React.PropsWithChildren {
    title?: string;
    text?: string;
    scrollOffset?: number;
    getScrollOffset?: Function;
};
