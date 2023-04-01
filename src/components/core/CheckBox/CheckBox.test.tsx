import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";

describe("CheckBox component", () => {
    const testIterations: number = 3;
    let testResult: HTMLInputElement;
    const testString = (type: string, index: number): string => `Test ${type} ${index}`;
    const testCallback = (e: React.ChangeEvent): void => {
        testResult = (e.target as HTMLInputElement);
    };

    const wrongInput = ["", 1, undefined, [], null, Infinity, NaN];

    it(`Component receives the appropriate props (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const name = testString("test", i);
            const size = 100 * i;
            const readOnly = i % 2 === 0;
            const disabled = i % 2 === 0;
            const component = <CheckBox
                name={name}
                size={size}
                readOnly={readOnly}
                disabled={disabled}
                onChangeHandler={testCallback}
            />;

            expect(component.props.name).to.eq(name);
            expect(component.props.size).to.eq(size);
            expect(component.props.readOnly).to.eq(readOnly);
            expect(component.props.disabled).to.eq(disabled);
            expect(typeof component.props.onChangeHandler).to.eq("function");
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const name = testString("test", i);
            const size = 100 * i;
            const readOnly = i % 2 === 0;
            const disabled = i % 2 === 0;

            const { unmount } = render(<CheckBox
                name={name}
                size={size}
                readOnly={readOnly}
                disabled={disabled}
                onChangeHandler={testCallback}
            />);

            const checkBoxElement: HTMLInputElement = screen.getByRole("checkBox");
            const [ input, svg ] = (Array.from(checkBoxElement.children) as [HTMLInputElement, SVGElement]);
            const svgChildren = Array.from(svg.children).slice(1);

            expect(input.tagName).to.eq("INPUT");
            expect(svg.tagName).to.eq("svg");
            expect(input.name).to.eq(name);
            expect(input.type).to.eq("checkbox");
            expect(input.checked).to.eq(false);
            expect(input.readOnly).to.eq(readOnly);
            expect(input.disabled).to.eq(disabled);

            for (const svgChild of svgChildren) {
                expect((svgChild as SVGElement).dataset.checked).to.eq("false");
            };

            unmount();
        };
    });

    it(`Component invokes the callback function appropriately (${testIterations} iterations)`, () => {
        const { unmount } = render(<CheckBox onChangeHandler={testCallback}/>);
        const checkBoxElement: HTMLInputElement = screen.getByRole("checkBox");
        const [ input, svg ] = (Array.from(checkBoxElement.children) as [HTMLInputElement, SVGElement]);
        const svgChildren = Array.from(svg.children).slice(1);

        fireEvent.click(input);

        expect(input.checked).to.eq(true);
        expect(testResult.tagName).to.eq("INPUT");
        expect(testResult.type).to.eq("checkbox");
        expect(testResult.checked).to.eq(true);

        for (const svgChild of (svgChildren as SVGElement[])) {
            expect(svgChild.dataset.checked).to.eq("true");
        };

        unmount();
    });

    it(`Component receives the wrong name prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CheckBox name={wrongInput[i]}/>);
            const checkBoxElement: HTMLInputElement = screen.getByRole("checkBox");
            const input = Array.from(checkBoxElement.children)[0] as HTMLInputElement;
            expect(input.name).to.eq(wrongInput[i] ? `${wrongInput[i]}` : "");

            unmount();
        };
    });
});
