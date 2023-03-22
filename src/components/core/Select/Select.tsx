import React, { useState } from "react";
import { Props } from "./types";

const Select = ({ id, name, options, changeHandler, defaultValue }: Props): JSX.Element => {
    const [value, setValue] = useState(`${defaultValue}`);

    const onChange = (e: React.ChangeEvent) => {
        if (changeHandler instanceof Function) {
            changeHandler(e);
        };

        setValue((e.target as HTMLSelectElement).value);
    };

    return <select
        id={`${id}`}
        name={`${name}`}
        value={value}
        onChange={onChange}
        role="select"
    >
        {options instanceof Array && options.map(([title, value]: string[]) => <option value={value} key={title + value} role="option">
            {title}
        </option>)}
    </select>;
};

export default Select;