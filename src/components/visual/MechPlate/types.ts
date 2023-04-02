import { PropsWidthHeight } from "../../../ts/interfaces";

export interface Props extends PropsWidthHeight {
    version?: string;
    withGlow?: boolean;
    glowColor?: string;
    cutOff?: number;
};

export interface Corners {
    pathStart: number;
    lt1: number;
    lt2: number;
    rt1: number;
    rt2: number;

    rb1: number;
    rb2: number;
    lb1: number;
    lb2: number;
};