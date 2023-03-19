import { render, screen } from "@testing-library/react";
import MechCorner from "./MechCorner";

describe("MechCorner", () => {
    const size: number = 90;
    const testIterations: number = 3;
    const initComponent = (size: number) => <MechCorner size={size}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 93.934 93.934"><g><g>
	<path d="M80.178,13.757c-18.341-18.342-48.08-18.342-66.421,0c-18.342,18.341-18.342,48.08,0,66.421   c18.341,18.342,48.08,18.342,66.421,0C98.52,61.836,98.52,32.098,80.178,13.757z M71.576,61.737l-9.838,9.838l-14.771-14.77   l-14.771,14.77l-9.838-9.838l14.77-14.771l-14.77-14.771l9.838-9.838l14.771,14.771l14.771-14.771l9.838,9.838l-14.77,14.772   L71.576,61.737z" fill="#FFFFFF"/>
</g></g> </svg>
    </MechCorner>;

    const path = (pathSize: number) => [
        `M12 52`,
        `L12 48, 24 36, ${pathSize - 24} 36,`,

        `${pathSize} 12, ${(pathSize * 2) - 48} 12,`,
        `${(pathSize * 2) - 12} 48, ${(pathSize * 2) - 12} ${pathSize}`,
        `${(pathSize * 2) - 36} ${pathSize + 24}, ${(pathSize * 2) - 36} ${(pathSize * 2) - 24}`,

        `${(pathSize * 2) - 48} ${(pathSize * 2) - 12}`,
        `${(pathSize * 2) - 78} ${(pathSize * 2) - 12}`,
        `${(pathSize * 2) - 90} ${(pathSize * 2) - 24}`,

        `${(pathSize * 2) - 90} ${pathSize + 36}, ${pathSize - 36} ${pathSize - 10}`,
        `24 90, 12 78`,
        `12 52 z`
    ].join(" ");

    it(`Component receives appropriate props (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const component = initComponent(size * i);

            expect(component.props.size).to.eq(size * i);
            expect(component.props.children.type).to.eq("svg");
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const component = initComponent(size * i);
            const { unmount } = render(component);
            const mechCorner = screen.getByRole("mechCorner");
            const [defs, glow, plate, foreignObject] = Array.from(mechCorner.children);

            expect(foreignObject.children[0].tagName).to.eq("svg");

            expect(foreignObject).to.toHaveAttribute("width", `${(size * i) * 0.65}`);
            expect(glow).to.toHaveAttribute("d", `${path(size * i)}`);
            expect(plate).to.toHaveAttribute("d", `${path(size * i)}`);
            expect(mechCorner).to.toHaveAttribute("width", `${size * i}px`);
            expect(mechCorner).to.toHaveAttribute("height", `${size * i}px`);
            expect(mechCorner).to.toHaveAttribute("viewBox", `0 0 ${(size * 2) * i} ${(size * 2) * i}`);

            unmount();
        };
    });
});