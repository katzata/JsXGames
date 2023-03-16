import { render, screen } from "@testing-library/react";

import GlassPanel from "./GlassPanel";

describe("GlassPanel", () => {
    const initComponent = (status: number|string, size: number|string) => (<GlassPanel width={status} height={size} />);

    it.only("Component renders appropriately", () => {
        const mockWidth: number = 200;
        const mockHeight: number = 100;

        const component = initComponent(mockWidth, mockHeight);
        render(component);

        const glassPanel = screen.getByRole("glassPanel");
        expect(glassPanel).to.exist;

        expect(component.props.width).to.eq(mockWidth);
        expect(component.props.height).to.eq(mockHeight);
    });
});