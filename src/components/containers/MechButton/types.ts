import { PropsChildrenWidthHeight } from "../../../ts/interfaces";
export interface Props extends PropsChildrenWidthHeight {
    type: string;
    text: string;
    target: string;
    cutOff: number;
    eventHandler?: (e: React.MouseEvent) => void;
};