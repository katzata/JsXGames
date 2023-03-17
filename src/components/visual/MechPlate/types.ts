export interface Props {
    version?: string,
    width: number,
    height: number,
    cutOff?: number
};

export interface Corners {
    pathStart: number,
    lt1: number,
    lt2: number,
    rt1: number,
    rt2: number,

    rb1: number,
    rb2: number,
    lb1: number,
    lb2: number,
};