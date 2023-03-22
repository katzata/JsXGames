import React, { useState } from "react";
import styles from "./RadioButtons.module.scss";
import { Props } from "./types";

const RadioButtons = ({ id, name, options, defaultValue, changeHandler }: Props): JSX.Element => {
    const [selected, setSelected]: [string, Function] = useState(`${defaultValue}`);

    const onChange = (e: React.ChangeEvent): void => {
        if (changeHandler instanceof Function) {
            changeHandler(e);
        };
        
        setSelected((e.target as HTMLInputElement).value);
    };

    return <div id={`${id}`} className={styles.radioButtons} role="radioButtonsContainer">
        {options instanceof Array && options.map((option: string) => {
            return <input
                type="radio"
                name={`${name}`}
                value={`${option}`}
                checked={option === selected}
                onChange={onChange}
                key={`${option}`}
                role="radioButton"
            />
        })}
    </div>;
};

export default RadioButtons;