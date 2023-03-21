import styles from "./Spinner.module.scss";
import { Props, ObjectStyles } from "./types";

const Spinner = ({ strokeWidth = 9 }: Props): JSX.Element => {
    const sizes: Array<number> = [100, 74, 44];

    return <div className={styles.spinner} role="spinner">
        {sizes.map((size, idx) => {
            const objectStyles: ObjectStyles = {
                left: "50%",
                top: "50%",
                width: `${size}%`,
                height: `${size}%`,
                transform: `translate(-50%, -50%) scale(${idx === 1 ? "-1,1" : "1,1"})`
            };

            return <svg
                width="100%"
                height="100%"
                style={objectStyles}
                viewBox="-10 -10 220 220"
                fill="none"
                key={`spinner_${idx}`}
            >
                <defs>
                    <linearGradient id="spinner-secondHalf">
                        <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
                        <stop offset="100%" stopOpacity="0.35" stopColor="currentColor" />
                    </linearGradient>
                    <linearGradient id="spinner-firstHalf">
                        <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
                        <stop offset="100%" stopOpacity="0.35" stopColor="currentColor" />
                    </linearGradient>
                </defs>

                <g strokeWidth={strokeWidth}>
                    <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
                    <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />
                    <path stroke="currentColor" strokeLinecap="round" d="M 4 100 A 96 96 0 0 1 4 98" />
                </g>
            </svg>
        })}
    </div>;
};

export default Spinner;