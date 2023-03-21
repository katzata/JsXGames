import styles from "./StatusIndicator.module.scss";
import { Props, StatusStyles, ScanLinesStyles } from "./types";

const StatusIndicator = ({ status, size, children }: Props): JSX.Element => {
    const statusColor: string = status ? "rgba(240, 190, 36, .65)" : "rgba(155, 155, 155, .65)";
    const statusStyles: StatusStyles = {
        width: size,
        height: size,
        border: `1px solid ${statusColor}`,
        fill: statusColor,
        stroke: statusColor
    };

    const scanLinesStyles: ScanLinesStyles = {
        boxShadow: `inset 0 0 2px 0 ${statusColor}`,
        backgroundImage: `-webkit-repeating-linear-gradient(
            top,
            ${statusColor} 0px,
            transparent 1px,
            rgba(0, 0, 0, 0.25) 1px,
            ${statusColor} 2px
        )`
    };

    return <div className={styles.statusIndicator} style={statusStyles} role="statusIndicator">
        {children}
        <div className={styles.scanLines} style={scanLinesStyles} role="indicatorScanLines"></div>
    </div>;
};

export default StatusIndicator;