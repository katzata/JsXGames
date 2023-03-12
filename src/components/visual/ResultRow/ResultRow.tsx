import styles from "./ResultRow.module.scss";

const ResultRow = (props: { icons: string[] }) => {
    const iconSpace = 50;

    return <div className={styles.resultRow}>
        {/* <svg viewBox={`0 0 ${320 + iconSpace} 90`}>
            <path
                d={`
                    M2 23
                    L2 20, 20 2, ${308 + iconSpace} 2, ${318 + iconSpace} 12, ${318 + iconSpace} 22, ${308 + iconSpace} 32,
                    ${408 - iconSpace} 32,
                    ${408 - iconSpace - 56} 88,
                `}
                stroke="#909DA3"
                strokeWidth="3"
            />
        </svg> */}
        {/* rgb(144, 157, 163) */}
        <svg viewBox="0 0 420 50">
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
                    M2 31
                    L2 28, 28 2, 413 2, 418 8, 418 13, 413 18,
                    ${408 - iconSpace} 18,
                    ${408 - iconSpace - 56} 88,
                    12 88, 2 76, 2 31
                `}
                stroke="url(#border)"
                strokeWidth="4"
                fill="url(#fill)"
                strokeLinejoin="round"
            />
        </svg>
    </div>;
};

export default ResultRow;