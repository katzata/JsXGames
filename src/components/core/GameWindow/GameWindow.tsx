import { Props } from "./types";

const GameWindow = ({ src, title}: Props): JSX.Element => {
    return <iframe src={src} title={title} role="gameWindow"/>
};

export default GameWindow;