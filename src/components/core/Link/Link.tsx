import { Props } from "./types";

const Link = ({ url, target, children}: Props ): JSX.Element => {
    return <a href={`${url}`} target={target || "_blank"} role="link">
        {children}
    </a>;
};

export default Link;