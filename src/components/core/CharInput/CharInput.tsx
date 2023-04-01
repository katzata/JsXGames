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
    readOnly,
    disabled
}: Props): JSX.Element => {
    return <input
        id={`${id}`}
        type={`${type}`}
        name={`${name}`}
        defaultValue={`${defaultValue}`}
        min={`${min}`}
        max={`${max}`}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        readOnly={readOnly}
        disabled={disabled}
        role="charInput"
    />;
};

export default CharInput;