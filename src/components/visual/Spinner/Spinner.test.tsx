import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
    const strokeWidth: number = 8;
    const testIterations: number = 3;
    const initComponent = (strokeWidth: number) => <Spinner strokeWidth={strokeWidth}/>;

    it(`Component receives appropriate props (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const component = initComponent(strokeWidth * i);
            expect(component.props.strokeWidth).to.eq(strokeWidth * i);
        };
    });

    it("Displays correctly", () => {
        render(initComponent(strokeWidth));
        const spinner = screen.getByRole("spinner");
        const children = Array.from(spinner.children).slice(2);

        const sizes: Array<number> = [100, 74, 44];

        for (let i = 0; i < children.length; i++) {
            expect(children[i]).toHaveAttribute("width", `${sizes[i]}%`);
            expect(children[i]).toHaveAttribute("height", `${sizes[i]}%`);
        };
    });
});