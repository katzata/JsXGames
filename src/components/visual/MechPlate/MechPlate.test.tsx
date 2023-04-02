import { render, screen } from "@testing-library/react";
import { Corners } from "./types";

import MechPlate from "./MechPlate";

const version = "a";
const width = 300;
const height = 300;
const cutOff = 32;
const testIterations: number = 3;

const newWidth = (n: number) => width * n;
const newHeight = (n: number) => height * n;
const newCutOff = (n: number) => cutOff * n;

const initComponent = (version: string, width: number, height: number, cutOff: number, withGlow?: boolean) => <MechPlate version={version} width={width} height={height} withGlow={withGlow} cutOff={cutOff} />;
const path = (corners: Corners, i: number) => [
    `M12 ${corners.pathStart + 10}`,
    `L12 ${corners.lt1 + newCutOff(i)}, ${corners.lt2 + newCutOff(i)} 12,`,
    `${corners.rt1 - newCutOff(i)} 12, ${newWidth(i) * 2 - 2} ${corners.rt2 + newCutOff(i)},`,
    `${newWidth(i) * 2 - 2} ${corners.rb1 - newCutOff(i)}, ${corners.rb2 - newCutOff(i)} ${newHeight(i) * 2 - 2},`,
    `${corners.lb1 + newCutOff(i)} ${newHeight(i) * 2 - 2}, 12 ${newHeight(i) * 2 - (corners.lb2 + newCutOff(i)) + 10}`,
    `12 ${corners.pathStart + 10} z`
].join(" ");

describe("MechPlate", () => {
    describe(`Version a has the appropriate size attributes (${testIterations} iterations)`, () => {
        const corners = (i: number): Corners => ({
            pathStart: newHeight(i),
            lt1: 10,
            lt2: 10,
            rt1: newWidth(i) * 2,
            rt2: 10,

            rb1: newHeight(i) * 2,
            rb2: newWidth(i) * 2,
            lb1: 10,
            lb2: 10,
        });

        it("Without glow", () => {
            for (let i = 1; i <= testIterations; i++) {
                const component = initComponent("a", newWidth(i), newHeight(i), newCutOff(i));
                const { unmount } = render(component);
                const plateElement = screen.getByRole("mechPlate");
                const pathElement = Array.from(screen.getByRole("mechPlate").children)[1];

                expect(plateElement).toHaveAttribute("viewBox", `10 10 ${(newWidth(i) * 2) - 10} ${(newHeight(i) * 2) - 10}`);
                expect(pathElement).toHaveAttribute("d", path(corners(i), i));
                unmount();
            };
        });

        it("With glow", () => {
            for (let i = 1; i <= testIterations; i++) {
                const component = initComponent("a", newWidth(i), newHeight(i), newCutOff(i));
                const { unmount } = render(component);
                const plateElement = screen.getByRole("mechPlate");
                const pathElement = Array.from(screen.getByRole("mechPlate").children)[1];

                expect(plateElement).toHaveAttribute("viewBox", `10 10 ${(newWidth(i) * 2) - 10} ${(newHeight(i) * 2) - 10}`);
                expect(pathElement).toHaveAttribute("d", path(corners(i), i));
                unmount();
            };
        });
    });

    describe(`Version b has the appropriate size attributes (${testIterations} iterations)`, () => {
        const corners = (i: number): Corners => ({
            pathStart: newHeight(i) + (newCutOff(i) / 2),
            lt1: newCutOff(i) + (newCutOff(i) / 2),
            lt2: newCutOff(i) + (newCutOff(i) / 2),
            rt1: newWidth(i) * 2,
            rt2: 10,

            rb1: (newHeight(i) * 2) - newCutOff(i),
            rb2: (newWidth(i) * 2) - newCutOff(i),
            lb1: 10,
            lb2: 10,
        });

        it("Without glow", () => {
            for (let i = 1; i <= testIterations; i++) {
                const component = initComponent("b", newWidth(i), newHeight(i), newCutOff(i));
                const { unmount } = render(component);
                const plateElement = screen.getByRole("mechPlate");
                const pathElement = Array.from(plateElement.children)[1];

                expect(plateElement).toHaveAttribute("viewBox", `10 10 ${(newWidth(i) * 2) - 10} ${(newHeight(i) * 2) - 10}`);
                expect(pathElement).toHaveAttribute("d", path(corners(i), i));
                unmount();
            };
        });

        it("With glow", () => {
            for (let i = 1; i <= testIterations; i++) {
                const component = initComponent("b", newWidth(i), newHeight(i), newCutOff(i), true);
                const { unmount } = render(component);
                const plateElement = screen.getByRole("mechPlate");
                const pathElement = Array.from(plateElement.children)[1];

                expect(plateElement).toHaveAttribute("viewBox", `0 0 ${(newWidth(i) * 2) + 10} ${(newHeight(i) * 2) + 10}`);
                expect(pathElement).toHaveAttribute("d", path(corners(i), i));
                unmount();
            };
        });
    });

    describe(`Version c has the appropriate size attributes (${testIterations} iterations)`, () => {
        const corners = (i: number): Corners => ({
            pathStart: newHeight(i) - (newCutOff(i) / 2),
            lt1: 10,
            lt2: 10,
            rt1: (newWidth(i) * 2) - newCutOff(i),
            rt2: newCutOff(i) + (newCutOff(i) / 2),

            rb1: newHeight(i) * 2,
            rb2: newWidth(i) * 2,
            lb1: newCutOff(i) + (newCutOff(i) / 2),
            lb2: 10 - newCutOff(i) + (newCutOff(i) * 2),
        });

        it("Without glow", () => {
            for (let i = 1; i <= testIterations; i++) {
                const component = initComponent("c", newWidth(i), newHeight(i), newCutOff(i));
                const { unmount } = render(component);
                const plateElement = screen.getByRole("mechPlate");
                const pathElement = Array.from(plateElement.children)[1];

                expect(plateElement).toHaveAttribute("viewBox", `10 10 ${(newWidth(i) * 2) - 10} ${(newHeight(i) * 2) - 10}`);
                expect(pathElement).toHaveAttribute("d", path(corners(i), i));
                unmount();
            };
        });

        it("With glow", () => {
            for (let i = 1; i <= testIterations; i++) {
                const component = initComponent("c", newWidth(i), newHeight(i), newCutOff(i), true);
                const { unmount } = render(component);
                const plateElement = screen.getByRole("mechPlate");
                const pathElement = Array.from(plateElement.children)[1];

                expect(plateElement).toHaveAttribute("viewBox", `0 0 ${(newWidth(i) * 2) + 10} ${(newHeight(i) * 2) + 10}`);
                expect(pathElement).toHaveAttribute("d", path(corners(i), i));
                unmount();
            };
        });
    });
});