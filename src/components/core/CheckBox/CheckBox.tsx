import { ChangeEvent, useState } from "react";
import styles from "./CheckBox.module.scss";
import { Props } from "./types";

const CheckBox = ({ name, size = 100, readOnly, disabled, onChangeHandler }: Props) => {
    const strokeWidth = Math.floor(size / 8);
    const [isChecked, setIsChecked] = useState(false);

    const onChange = (e: ChangeEvent) => {
        const targetState = (e.target as HTMLInputElement).checked;
        setIsChecked(targetState);
        if (onChangeHandler) onChangeHandler(e);
    };

    const path = [
        `M${size / 2 + (size / 12)} ${size / 2 + (size / 2)}`,
        `${size - (size / 10)} ${size + (size / 3)}`,
        `L${size + (size / 2)} ${size - (size / 3)}`
    ].join(" ");

    return <div className={styles.checkbox} style={{filter: `brightness(${isChecked ? 100 : 80}%)`}} role="checkBox">
        <input type="checkbox" name={name || ""} readOnly={readOnly || false} disabled={disabled || false} onChange={onChange}/>

        <svg width={size * 2} height={size * 2} viewBox={`0 0 ${size * 2} ${size * 2}`} style={{ borderRadius: `${ Math.floor(size / 8.3) }` }}>
            <defs>
                <filter id="glow">
                    <feDropShadow className={styles.feDropShadow} dx="0" dy="0" stdDeviation="2"/>
                </filter>

                <filter id="blur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                </filter>
            </defs>

            <rect
                id="rect"
                x={strokeWidth / 2}
                y={strokeWidth / 2}
                rx="8"
                width={`${(size * 2) - (strokeWidth)}`}
                height={`${(size * 2) - (strokeWidth)}`}
                strokeWidth={isChecked ? strokeWidth : "0"}
                data-checked={isChecked}
            />

            <path
                d={path}
                fill="none"
                strokeWidth={isChecked ? strokeWidth : "0"}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-checked={isChecked}
                filter="url(#glow)"
            />
        </svg>
    </div>;
};

export default CheckBox;