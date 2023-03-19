import styles from "./MechCorner.module.scss";
import { Props } from "./types";

const MechCorner = ({ size, children }: Props): JSX.Element => {
    const scaled = (num: number) => num * 2;

    const path = [
        `M12 52`,
        `L12 48, 24 36, ${size - 24} 36,`,

        `${size} 12, ${(size * 2) - 48} 12,`,
        `${(size * 2) - 12} 48, ${(size * 2) - 12} ${size}`,
        `${(size * 2) - 36} ${size + 24}, ${(size * 2) - 36} ${(size * 2) - 24}`,

        `${(size * 2) - 48} ${(size * 2) - 12}`,
        `${(size * 2) - 78} ${(size * 2) - 12}`,
        `${(size * 2) - 90} ${(size * 2) - 24}`,

        `${(size * 2) - 90} ${size + 36}, ${size - 36} ${size - 10}`,
        `24 90, 12 78`,
        `12 52 z`
    ].join(" ");

    return <svg
        className={styles.mechCorner}
        width={`${size}px`}
        height={`${size}px`}
        viewBox={`0 0 ${scaled(size)} ${scaled(size)}`}
        role="mechCorner"
    >
        <defs>
            <linearGradient id="border" gradientTransform="rotate(90)">
                <stop offset="0%" className={styles.borderStop1} />
                <stop offset="48%" className={styles.borderStop2} />
            </linearGradient>

            <linearGradient id="fill" gradientTransform="rotate(90)">
                <stop offset="0%" className={styles.fillStop1} />
                <stop offset="100%" className={styles.fillStop2} />
            </linearGradient>

            <filter id="borderGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>

            {/* <filter id="dotGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter> */}
        </defs>

        {/* <circle r="10" filter="url(#dotGlow)" style={{ offsetPath: `path('${path}')` }}/> */}

        <path
            d={path}
            className={styles.glow}
            strokeWidth="15"
            fill="none"
            filter="url(#borderGlow)"
        />

        <path
            d={path}
            stroke="url(#border)"
            strokeWidth="4"
            fill="url(#fill)"
        />
        <foreignObject className={styles.foreignObject} x="51%" y="16.5%" width={size * 0.65} height={size * 0.65}>
            {children}
        </foreignObject>
        {/* will be removed when the bolt element is added */}
        {/* <rect x="0%" y="0%" width={size * 2} height={size * 2} fill="none" stroke="blue" strokeWidth={"19"}/> */}
        {/* <rect x="41%" y="6.5%" width={size + 5} height={size + 5} fill="none" stroke="red" strokeWidth={"1"}/> */}
    </svg>;
};

export default MechCorner;