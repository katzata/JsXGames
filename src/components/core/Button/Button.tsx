import styles from "./Button.module.scss";
import { Props } from "./types";

const Button = ({eventHandler, children}: Props): JSX.Element => {
    const onClick = (e: React.MouseEvent): void => {
        if (typeof eventHandler !== "function") return;

        eventHandler(e);
    };

    return <button className={styles.button} onClick={(e: React.MouseEvent) => onClick(e)}>
        {children}
    </button>;
};

export default Button;