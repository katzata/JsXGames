import styles from "./Bolt.module.scss"

const Bolt = (): JSX.Element => {
    return <svg className={styles.bolt} width="90px" height="90px" viewBox={`0 0 180 180`} role="bolt">
        <defs>
            <linearGradient id="boltBorder" gradientTransform="rotate(90)">
                <stop offset="0%" className={styles.boltBorderStop1} />
                <stop offset="48%" className={styles.boltBorderStop2} />
            </linearGradient>

            <linearGradient id="hexBorder" gradientTransform="rotate(90)">
                <stop offset="0%" className={styles.hexBorderStop1} />
                <stop offset="48%" className={styles.hexBorderStop2} />
            </linearGradient>

            <linearGradient id="boltFill" gradientTransform="rotate(90)">
                <stop offset="0%" className={styles.boltFillStop1} />
                <stop offset="100%" className={styles.boltFillStop2} />
            </linearGradient>

            <linearGradient id="hexFill" gradientTransform="rotate(90)">
                <stop offset="0%" className={styles.hexFillStop1} />
                <stop offset="100%" className={styles.hexFillStop2} />
            </linearGradient>
        </defs>

        <circle cx="50%" cy="50%" r="87" stroke="url(#boltBorder)" strokeWidth="5" fill="url(#boltFill)"/>

        <path
            className={styles.hex}
            d="M51 100, L45 90, 68 51, 113 51, 135 90, 113 129, 68 129, 51 100 z"
            stroke="url(#hexBorder)"
            strokeWidth="5"
            fill="url(#hexFill)"
        />
    </svg>;
};

export default Bolt;