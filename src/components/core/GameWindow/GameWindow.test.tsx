import { render, screen } from "@testing-library/react";
import GameWindow from "./GameWindow";

describe("GameWindow component", () => {
    const src = "test_src";
    const title = "test title "
    const testIterations: number = 3;

    const wrongInput = ["", 1, undefined, [], null, Infinity, NaN];

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const component = <GameWindow src={src + i} title={title + i} />
            const { unmount } = render(component);

            const gameWindowElement: HTMLInputElement = screen.getByRole("gameWindow");

            expect(gameWindowElement.src).to.eq(("http://localhost:3000/" + src) + i);
            expect(gameWindowElement.title).to.eq(title + i);

            unmount();
        };
    });

    it(`Component receives the wrong src prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<GameWindow src={wrongInput[i]}/>);

            const gameWindowElement: HTMLInputElement = screen.getByRole("gameWindow");
            expect(gameWindowElement.src).to.eq(Number.isNaN(wrongInput[i]) || wrongInput[i] ? `http://localhost:3000/${wrongInput[i]}` : "");

            unmount();
        };
    });

    it(`Component receives the wrong title prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<GameWindow title={wrongInput[i]}/>);

            const gameWindowElement: HTMLInputElement = screen.getByRole("gameWindow");
            expect(gameWindowElement.title).to.eq(Number.isNaN(wrongInput[i]) || wrongInput[i] ? `${wrongInput[i]}` : "");

            unmount();
        };
    });
});
