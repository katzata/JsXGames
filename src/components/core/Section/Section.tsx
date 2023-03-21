import styles from "./Section.module.scss";
import { Props } from "./types";

const Section = ({ title, children }: Props): JSX.Element => {
    return <section className={styles.section}>
        {title && <h3>{title}</h3>}
        {children}
    </section>;
};

export default Section;