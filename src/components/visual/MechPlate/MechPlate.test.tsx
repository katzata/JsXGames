import { render, screen } from "@testing-library/react";
import { Corners } from "./types";

import MechPlate from "./MechPlate";

describe("MechPlate", () => {
    const version = "a";
    const width = 300;
    const height = 300;
    const cutOff = 32;
    const testIterations: number = 3;

    const newWidth = (n: number) => width * n;
    const newHeight = (n: number) => height * n;
    const newCutOff = (n: number) => cutOff * n;

    const initComponent = (version: string, width: number, height: number, cutOff: number) => <MechPlate version={version} width={width} height={height} cutOff={cutOff} />;

    it(`Component receives appropriate props (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const component = initComponent(version, newWidth(i), newHeight(i), newCutOff(i));

            expect(component.props.version).to.eq(version);
            expect(component.props.width).to.eq(newWidth(i));
            expect(component.props.height).to.eq(newHeight(i));
            expect(component.props.cutOff).to.eq(newCutOff(i));
        };
    });

    it(`Versions 'a, b, c' have the appropriate size attributes (${testIterations} iterations)`, () => {
        const testVersions = ["a", "b", "c"];

        for (let i = 1; i <= testIterations; i++) {
            const component = initComponent(testVersions[i - 1], newWidth(i), newHeight(i), newCutOff(i));
            const { unmount } = render(component);
            const pathElement = Array.from(screen.getByRole("mechPlate").children)[1];
            const corners: Corners = {
                pathStart: newHeight(i),
                lt1: 0,
                lt2: 0,
                rt1: newWidth(i) * 2,
                rt2: 0,

                rb1: newHeight(i) * 2,
                rb2: newWidth(i) * 2,
                lb1: 0,
                lb2: 0,
            };

            if (testVersions[i - 1] === "b") {
                corners.pathStart = corners.pathStart + (newCutOff(i) / 2);
                corners.lt1 = newCutOff(i);
                corners.lt2 = newCutOff(i);
                corners.rb1 = corners.rb1 - newCutOff(i);
                corners.rb2 = corners.rb2 - newCutOff(i);
            };

            if (testVersions[i - 1] === "c") {
                corners.pathStart = corners.pathStart - (newCutOff(i) / 2);
                corners.rt1 = corners.rt1 - newCutOff(i);
                corners.rt2 = newCutOff(i);
                corners.lb1 = newCutOff(i);
                corners.lb2 = corners.rb2 - newCutOff(i);
            };

            expect(pathElement).toHaveAttribute("d", `
                M2 ${corners.pathStart}
                L2 ${corners.lt1 + newCutOff(i)}, ${corners.lt2 + newCutOff(i)} 2,
                ${corners.rt1 - newCutOff(i)} 2, ${newWidth(i) * 2 - 2} ${corners.rt2 + newCutOff(i)},
                ${newWidth(i) * 2 - 2} ${corners.rb1 - newCutOff(i)}, ${corners.rb2 - newCutOff(i)} ${newHeight(i) * 2 - 2},
                ${corners.lb1 + newCutOff(i)} ${newHeight(i) * 2 - 2}, 2 ${newHeight(i) * 2 - (corners.lb1 + newCutOff(i))}
                2 ${corners.pathStart}
            `);

            unmount();
        };
    });
});