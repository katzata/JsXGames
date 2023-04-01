import { Props } from "./types";

const CharInput = ({
    id,
    type,
    name,
    defaultValue,
    min,
    max,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
    readOnly = false,
    disabled = false
}: Props): JSX.Element => {
    return <input
        id={`${id}`}
        type={`${type}`}
        name={`${name}`}
        defaultValue={`${defaultValue}`}
        min={`${min}`}
        max={`${max}`}
        onChange={typeof onChangeHandler === "function" ? onChangeHandler : null}
        onFocus={typeof onFocusHandler === "function" ? onFocusHandler : null}
        onBlur={typeof onBlurHandler === "function" ? onBlurHandler : null}
        readOnly={readOnly}
        disabled={disabled}
        role="charInput"
    />;
};

export default CharInput;