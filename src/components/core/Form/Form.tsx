import styles from "./Form.module.scss";
import { Props } from "./types";

/**
 * Extracts and pass the form data to the submit handler.
 * The title prop gets rendered within a legend tag.
 * 
 * ! Prevents default !
 */
const Form = ({ method, url, target, title, submitButtonContent, submitHandler, disabled, children }: Props): JSX.Element => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        submitHandler(new FormData(e.target as HTMLFormElement));
    };

    return <form
        className={styles.form}
        method={method}
        action={url}
        target={target || "_blank"}
        onSubmit={onSubmit}
        role="form"
    >
        <fieldset disabled={disabled}>
            {title && <legend>{title}</legend>}
            {children}
            <button className={styles.button}>{submitButtonContent || <span>GO</span>}</button>
        </fieldset>
    </form>;
};

export default Form;