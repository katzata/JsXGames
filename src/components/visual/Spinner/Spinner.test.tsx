import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
    const strokeWidth: number = 8;
    const testIterations: number = 1;
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
        const children = Array.from(spinner.children).slice(1);

        const sizes: Array<number> = [100, 70, 40];

        for (let i = 0; i < children.length; i++) {
            expect(children[i]).toHaveAttribute("width", `${sizes[i]}%`);
            expect(children[i]).toHaveAttribute("height", `${sizes[i]}%`);
            const subChildren = Array.from(children[i].children);

            for (let j = 0; j < subChildren.length; j++) {
                expect(subChildren[j]).toHaveAttribute("x", `${100 - sizes[i]}`);
                expect(subChildren[j]).toHaveAttribute("y", `${100 - sizes[i]}`);
                expect(subChildren[j]).toHaveAttribute("viewBox", "0 0 200 200");
                expect(subChildren[j]).toHaveAttribute("fill", "none");
                const circleGroups = Array.from(subChildren[j].children);

                for (const groupElement of circleGroups) {
                    expect(groupElement).toHaveAttribute("stroke-width", `${strokeWidth}`)
                };
            };
        };
    });
});