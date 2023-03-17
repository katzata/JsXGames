import { Props, Corners } from "./types";

const MechPlate = ({ version = "a", width = 200, height = 100, cutOff = 28 }: Props) => {
    const upScale = (num: number) => num * 2;
    const corners: Corners = {
        pathStart: height,
        lt1: 0,
        lt2: 0,
        rt1: width * 2,
        rt2: 0,

        rb1: height * 2,
        rb2: width * 2,
        lb1: 0,
        lb2: 0,
    };

    if (version === "b") {
        corners.pathStart = corners.pathStart + (cutOff / 2);
        corners.lt1 = cutOff;
        corners.lt2 = cutOff;

        corners.rb1 = corners.rb1 - cutOff;
        corners.rb2 = corners.rb2 - cutOff;
    };

    if (version === "c") {
        corners.pathStart = corners.pathStart - (cutOff / 2);
        corners.rt1 = corners.rt1 - cutOff;
        corners.rt2 = cutOff;

        corners.lb1 = cutOff;
        corners.lb2 = corners.rb2 - cutOff;
    };

    return <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${upScale(width)} ${upScale(height)}`} role="mechPlate">
        <defs>
            <linearGradient id="border" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="rgb(174, 187, 193)" />
                <stop offset="48%" stopColor="rgb(114, 127, 133)" />
            </linearGradient>

            <linearGradient id="fill" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="rgb(154, 167, 173)" />
                <stop offset="100%" stopColor="rgb(134, 147, 153)" />
            </linearGradient>
        </defs>

        <path
            d={`
                M2 ${corners.pathStart}
                L2 ${corners.lt1 + cutOff}, ${corners.lt2 + cutOff} 2,
                ${corners.rt1 - cutOff} 2, ${upScale(width) - 2} ${corners.rt2 + cutOff},
                ${upScale(width) - 2} ${corners.rb1 - cutOff}, ${corners.rb2 - cutOff} ${upScale(height) - 2},
                ${corners.lb1 + cutOff} ${upScale(height) - 2}, 2 ${upScale(height) - (corners.lb1 + cutOff)}
                2 ${corners.pathStart}
            `}
            stroke="url(#border)"
            strokeWidth="4"
            fill="url(#fill)"
            strokeLinejoin="round"
        />
    </svg>
};

export default MechPlate;