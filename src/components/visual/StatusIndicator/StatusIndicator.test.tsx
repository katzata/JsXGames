import { render, screen } from "@testing-library/react";

import StatusIndicator from "./StatusIndicator";

describe("StatusIndicator", () => {
    const mockSize: string = "18px";
    const svgText: string = "yay";

    const initComponent = (status: boolean, size: string) => (<StatusIndicator status={status} size={size} >
        <svg>
            <text>yay</text>
        </svg>
    </StatusIndicator>);

    it("Component and children render appropriately", () => {
        const component = initComponent(false, mockSize);
        render(component);

        const indicator = screen.getByRole("statusIndicator");
        const indicatorScanLines = screen.getByRole("indicatorScanLines");

        expect(indicator).to.exist;
        expect(indicatorScanLines).to.exist;

        expect(indicator).toHaveStyle(`width: ${mockSize}`);
        expect(indicator).toHaveStyle(`height: ${mockSize}`);

        expect(component.props.status).to.eq(false);
        expect(component.props.size).to.eq(mockSize);
        expect(component.props.children.type).to.eq("svg");
        expect(component.props.children.props.children.type).to.eq("text");
        expect(component.props.children.props.children.props.children).to.eq(svgText);
    });

    it("Off state", () => {
        render(initComponent(false, mockSize));

        const indicator = screen.getByRole("statusIndicator");
        const indicatorScanLines = screen.getByRole("indicatorScanLines");
        const color = "rgba(155, 155, 155, .65)";

        expect(indicator).toHaveStyle(`border: 1px solid ${color}`);
        expect(indicator).toHaveStyle(`fill: ${color}`);
        expect(indicator).toHaveStyle(`stroke: ${color}`);
        expect(indicatorScanLines).toHaveStyle(`boxShadow: inset 0 0 2px 0 ${color}`);
        expect(indicatorScanLines).toHaveStyle(`backgroundImage: -webkit-repeating-linear-gradient(
            top,
            ${color} 0px,
            transparent 1px,
            rgba(0, 0, 0, 0.25) 1px,
            ${color} 2px`
        );
    });

    it("On state", () => {
        render(initComponent(true, mockSize));

        const indicator = screen.getByRole("statusIndicator");
        const indicatorScanLines = screen.getByRole("indicatorScanLines");
        const color = "rgba(240, 190, 36, .65)";

        expect(indicator).toHaveStyle(`border: 1px solid ${color}`);
        expect(indicator).toHaveStyle(`fill: ${color}`);
        expect(indicator).toHaveStyle(`stroke: ${color}`);
        expect(indicatorScanLines).toHaveStyle(`boxShadow: inset 0 0 2px 0 ${color}`);
    });
});