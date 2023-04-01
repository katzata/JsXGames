import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    const testIterations: number = 3
    const testElements: JSX.Element[] = [
        <span>Span1</span>,
        <span>Span2</span>,
        <span>Span3</span>
    ];

    let testResult = "nay";
    const testFunction = (): void => {testResult = "yay"};

    it(`Component receives the appropriate props (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const component = <Button eventHandler={testFunction}>{testElements[i]}</Button>;

            expect(typeof component.props.eventHandler).to.eq("function");
            expect(component.props.children.type).to.eq(testElements[i].type);
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const { unmount } = render(<Button eventHandler={() => {}}>{testElements[i]}</Button>);
            const buttonElement = document.querySelector("button");
            const childElement = screen.getByText(testElements[i].props.children);

            expect(buttonElement).toBeTruthy();
            expect(childElement.textContent).toBeTruthy();
            expect(childElement.tagName).to.eq(testElements[i].type.toLocaleUpperCase());

            unmount();
        };
    });

    it(`Component invokes the callback function appropriately (${testIterations} iterations)`, () => {
        render(<Button eventHandler={testFunction}/>);
        fireEvent.click(document.querySelector("button") as HTMLButtonElement);
        expect(testResult).to.eq("yay");
    });
});