import { render, screen, fireEvent } from "@testing-library/react";
import MechButton from "./MechButton";

describe("MechButton component", () => {
    const size = 100;
    const testIterations: number = 3;
    let testResult: HTMLButtonElement;

    const testCallback = (e: React.MouseEvent): void => {
        testResult = e.target as HTMLButtonElement;
    };

    describe(`Component renders appropriately`, () => {
        it(`Type: button (${testIterations} iterations)`, () => {
            for (let i = 1; i <= testIterations; i++) {
                const { unmount } = render(<MechButton
                    type="button"
                    width={size * i}
                    height={size * i}
                    text={"games" + i}
                    target="test_target"
                    cutOff={12}
                    eventHandler={testCallback}
                />);

                const mechButtonElement: HTMLDivElement = screen.getByRole("mechButton");
                const buttonElement = Array.from(mechButtonElement.children)[0] as HTMLButtonElement;
                const [mechPlate, textSvg] = Array.from(buttonElement.children);
                const buttonText = Array.from(textSvg.children)[3];

                expect(mechButtonElement.tagName).to.eq("DIV");
                expect(buttonElement.tagName).to.eq("BUTTON");
                expect(typeof buttonElement.onclick).to.eq("function");
                expect(mechPlate.tagName).to.eq("svg");
                expect(textSvg.tagName).to.eq("svg");
                expect(mechPlate).toHaveAttribute("width", `${size * i}px`);
                expect(mechPlate).toHaveAttribute("height", `${size * i}px`);
                expect(textSvg).toHaveAttribute("width", `${size * i}px`);
                expect(textSvg).toHaveAttribute("height", `${size * i}px`);
                expect(buttonText).toHaveAttribute("font-size", `${(size * i + size * i) / 8}`);
                expect(buttonText).toHaveTextContent("games" + i);

                unmount();
            };
        });

        it(`Type: link (${testIterations} iterations)`, () => {
            for (let i = 1; i <= testIterations; i++) {
                const { unmount } = render(<MechButton
                    type="link"
                    width={size * i}
                    height={size * i}
                    text={"games" + i}
                    target={"test_target" + i}
                    cutOff={12}
                    eventHandler={testCallback}
                />);

                const mechButtonElement: HTMLDivElement = screen.getByRole("mechButton");
                const linkElement = Array.from(mechButtonElement.children)[0];
                const [mechPlate, textSvg] = Array.from(linkElement.children);
                const buttonText = Array.from(textSvg.children)[3];

                expect(mechButtonElement.tagName).to.eq("DIV");
                expect(linkElement.tagName).to.eq("A");
                expect(linkElement).toHaveAttribute("target", "test_target" + i);
                expect(mechPlate.tagName).to.eq("svg");
                expect(textSvg.tagName).to.eq("svg");
                expect(mechPlate).toHaveAttribute("width", `${size * i}px`);
                expect(mechPlate).toHaveAttribute("height", `${size * i}px`);
                expect(textSvg).toHaveAttribute("width", `${size * i}px`);
                expect(textSvg).toHaveAttribute("height", `${size * i}px`);
                expect(buttonText).toHaveAttribute("font-size", `${(size * i + size * i) / 8}`);
                expect(buttonText).toHaveTextContent("games" + i);

                unmount();
            };
        });
    });

    it(`Component invokes the callback function appropriately (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const { unmount } = render(<MechButton
                type="button"
                width={100}
                height={100}
                text={"games"}
                target="test_target"
                cutOff={12}
                eventHandler={testCallback}
            />);

            const mechButtonElement: HTMLDivElement = screen.getByRole("mechButton");
            const buttonElement = Array.from(mechButtonElement.children)[0] as HTMLButtonElement;

            fireEvent.click(buttonElement);
            expect(testResult.tagName).to.eq("BUTTON");

            unmount();
        };
    });
});
