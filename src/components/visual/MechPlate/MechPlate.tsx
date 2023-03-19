import styles from "./MechPlate.module.scss";
import { Props, Corners } from "./types";

const MechPlate = ({ version = "a", width = 200, height = 100, withGlow = false, cutOff = 20 }: Props): JSX.Element => {
    const upScale = (num: number) => num * 2;
    const offset: number = withGlow ? 10 : -10;
    const baseXY: number = withGlow ? 0 : 10;
    const viewBox = `${baseXY} ${baseXY} ${upScale(width) + offset} ${upScale(height) + offset}`;
    const corners: Corners = {
        pathStart: height + 10,
        lt1: 10,
        lt2: 10,
        rt1: width * 2,
        rt2: 10,

        rb1: height * 2,
        rb2: width * 2,
        lb1: 10,
        lb2: 10,
    };

    if (version === "b") {
        corners.pathStart = corners.pathStart + ((cutOff) / 2);
        corners.lt1 = (cutOff);
        corners.lt2 = (cutOff);
        corners.rb1 = corners.rb1 - (cutOff);
        corners.rb2 = corners.rb2 - (cutOff);
    };

    if (version === "c") {
        corners.pathStart = corners.pathStart - ((cutOff) / 2);
        corners.rt1 = corners.rt1 - (cutOff);
        corners.rt2 = (cutOff);
        corners.lb1 = (cutOff);
        corners.lb2 = corners.lb2 - (cutOff);
    };

    const path = [
        `M12 ${corners.pathStart}`,
        `L12 ${corners.lt1 + cutOff}, ${corners.lt2 + cutOff} 12,`,
        `${corners.rt1 - cutOff} 12, ${upScale(width) - 2} ${corners.rt2 + cutOff},`,
        `${upScale(width) - 2} ${corners.rb1 - cutOff}, ${corners.rb2 - cutOff} ${upScale(height) - 2},`,
        `${corners.lb1 + cutOff} ${upScale(height) - 2}, 12 ${upScale(height) - (corners.lb2 + cutOff) + 10}`,
        `12 ${corners.pathStart} z`
    ].join(" ");

    return <svg className={styles.mechPlate} width={`${width}px`} height={`${height}px`} viewBox={viewBox} role="mechPlate">
        <defs>
            <linearGradient id="border" gradientTransform="rotate(90)">
                <stop offset="0%" className={styles.borderStop1} />
                <stop offset="48%" className={styles.borderStop2} />
            </linearGradient>

            <linearGradient id="fill" gradientTransform="rotate(90)">
                <stop offset="0%" className={styles.fillStop1} />
                <stop offset="100%" className={styles.fillStop2} />
            </linearGradient>

            {withGlow && <filter id="borderGlow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>}

            {/* <filter id="dotGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter> */}
        </defs>

        {/* <circle r="10" filter="url(#dotGlow)" style={{ offsetPath: `path('${path}')` }}/> */}

        {withGlow && <path
            d={path}
            className={styles.glow}
            strokeWidth="15"
            fill="none"
            filter="url(#borderGlow)"
        />}

        <path
            d={path}
            stroke="url(#border)"
            strokeWidth="4"
            fill="url(#fill)"
        />
    </svg>
};

export default MechPlate;