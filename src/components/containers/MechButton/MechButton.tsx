import styles from "./MechButton.module.scss";
import { Props } from "./types";
import MechPlate from "../../visual/MechPlate/MechPlate";
import Button from "../../core/Button/Button";
import Link from "../../core/Link/Link";

const MechButton = ({
    type,
    width = 130,
    height = 60,
    text,
    target,
    cutOff,
    eventHandler
}: Props): JSX.Element => {
    const dimensionCheck = (digits: number | string): string => typeof digits === "string" ? digits : `${digits}px`; 

    const children = [
        <MechPlate version="b" width={width} height={height} withGlow={true} glowColor="rgba(0, 0, 0, .9)" cutOff={cutOff} key={width + height + cutOff}/>,

        <svg
            className={styles.buttonText}
            width={dimensionCheck(width)}
            height={dimensionCheck(height)}
            viewBox={`0 0 ${width} ${height}`}
            key={width + height}
        >
            <defs>
                <linearGradient id="indent" gradientTransform="rotate(90)">
                    <stop className={styles.gradientTop} offset="10%"/>
                    <stop className={styles.gradientBottom} offset="95%"/>
                </linearGradient>
            </defs>

            <use href={`#${text}`} stroke="url(#indent)" strokeWidth={3}></use>
            <use href={`#${text}`} className={styles.text} strokeWidth={1}></use>

            <text
                id={text}
                x="49%"
                y="58%"
                fontSize={(width + height) / 8}
                dominantBaseline="middle"
                textAnchor="middle"
            >
                {text}
            </text>
        </svg>
    ];

    return <div className={styles.mechButton} role="mechButton">
        {type === "link"
        ?
            <Link url="asd" target={target}>
                {children}
            </Link>
        :
            <Button eventHandler={eventHandler}>
                {children}
            </Button>
        }
    </div>
};

export default MechButton;