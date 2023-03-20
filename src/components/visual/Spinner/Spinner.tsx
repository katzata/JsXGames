import styles from "./Spinner.module.scss";
import { Props } from "./types";

const Spinner = ({ strokeWidth }: Props): JSX.Element => {
    const sizes: Array<number> = [100, 70, 40];

    return (
        <svg
            className={styles.spinner}
            width={"100px"}
            height={"100px"}
            viewBox={"0 0 200 200"}
            fill="none"
            role="spinner"
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

            {sizes.map((size, idx) => {
                const objectStyles = {
                    transform: idx === 1 ? "scaleX(-1)" : "",
                    transformOrigin: "center"
                };

                return <foreignObject
                    x={`${100 - size}`}
                    y={`${100 - size}`}
                    width={`${size}%`}
                    height={`${size}%`}
                    style={objectStyles}
                    key={"spinner" + idx}
                >
                    <svg
                        x={`${100 - size}`}
                        y={`${100 - size}`}
                        viewBox={"0 0 200 200"}
                        fill="none"
                    >
                        <g strokeWidth={strokeWidth ? strokeWidth : "9"}>
                            <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
                            <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />
                            <path stroke="currentColor" strokeLinecap="round" d="M 4 100 A 96 96 0 0 1 4 98" />
                        </g>
                    </svg>
                </foreignObject>
            })}
        </svg>
    );

};

export default Spinner;