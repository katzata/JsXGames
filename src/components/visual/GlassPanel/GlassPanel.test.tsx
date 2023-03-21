import { render, screen } from "@testing-library/react";
import { Props } from "./types";

import GlassPanel from "./GlassPanel";

describe("GlassPanel", () => {
    const mockWidth: number = 200;
    const mockHeight: number = 100;
    const testIterations: number = 3;

    const initComponent = (width:number, height:number) => (<GlassPanel width={width} height={height} />);

    it("Component renders appropriately", () => {
        for (let i = 1; i <= testIterations; i++) {
            const component = initComponent(mockWidth * i, mockHeight * i);
            const {unmount} = render(component);

            const glassPanel = screen.getByRole("glassPanel");
            expect(glassPanel).to.exist;

            expect(component.props.width).to.eq(mockWidth * i);
            expect(component.props.height).to.eq(mockHeight * i);

            unmount();
        };
    });
});