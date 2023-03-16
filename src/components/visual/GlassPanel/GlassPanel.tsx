import styles from "./GlassPanel.module.scss";

interface Props extends React.PropsWithChildren {
    width: number|string;
    height: number|string;
};

const GlassPanel = ({ width = 100, height = 100 }: Props) => {
    const upScaledWidth: number = Number(width) * 2;
    const upScaledHeight: number = Number(height) * 2;

    return <svg
        className={styles.glassPanel}
        width={`${upScaledWidth}px`}
        height={`${upScaledHeight}px`}
        viewBox={`0 0 ${upScaledWidth} ${upScaledHeight}`}
        role="glassPanel"
    >
        <defs>
            <linearGradient id="glass-shine-heavy" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "rgba(255, 255, 255, .32)", stopOpacity: "1" }} />
                <stop offset="60%" style={{ stopColor: "rgba(255, 255, 255, .1)", stopOpacity: "1" }} />
            </linearGradient>

            <filter id="glass-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation=".1" />
            </filter>
        </defs>

        <rect
            width="100%"
            height="100%"
            x="0"
            y="0"
            rx="3"
            fill="url(#glass-shine-heavy)"
            filter="url(#glass-blur)"
            strokeWidth="1"
            stroke="rgba(255, 255, 255, .25)"
        />
    </svg>;
};

export default GlassPanel;