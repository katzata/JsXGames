export interface Props extends React.PropsWithChildren {
    scrollOffset?: number | undefined;
    getScrollOffset?: (newOffset: number) => void;
}