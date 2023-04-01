import { fireEvent, render, screen } from "@testing-library/react";
import CharInput from "./CharInput";

describe("CharInput component", () => {
    const id = "test id";

    const name = "test name"
    const defaultValue = "test value"
    const min = 0
    const max = 10
    const bool = (n: number) => n % 2 === 0;
    const testIterations: number = 3;

    const wrongInput = ["", 1, undefined, [], null, Infinity, NaN];
    const testCallback = (e: any): void => {};


    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const component = <CharInput
                id={id + i}
                type="text"
                name={name + i}
                defaultValue={defaultValue + i}
                min={`${min + i}`}
                max={`${max + i}`}
                onChangeHandler={testCallback}
                onFocusHandler={testCallback}
                onBlurHandler={testCallback}
                readOnly={bool(i)}
                disabled={bool(i)}
            />
            const { unmount } = render(component);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");

            expect(charInputElement.tagName).to.eq("INPUT");
            expect(charInputElement.id).to.eq(id + i);
            expect(charInputElement.type).to.eq("text");
            expect(charInputElement.name).to.eq(name + i);
            expect(charInputElement.min).to.eq(`${min + i}`);
            expect(charInputElement.max).to.eq(`${max + i}`);
            expect(typeof component.props.onChangeHandler).to.eq("function");
            expect(typeof component.props.onFocusHandler).to.eq("function");
            expect(typeof component.props.onBlurHandler).to.eq("function");
            expect(charInputElement.readOnly).to.eq(bool(i));
            expect(charInputElement.disabled).to.eq(bool(i));

            unmount();
        };
    });

    it.skip(`Component triggers the onChangeHandler (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            if (typeof wrongInput[i] === "function") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput onChangeHandler={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            fireEvent.change(charInputElement, {target: {value: "test" + i}});

            unmount();
        };
    });

    it.skip(`Component triggers the onFocusHandler (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput onFocusHandler={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            fireEvent.focus(charInputElement);
            expect(charInputElement.onfocus).to.eq(null);

            unmount();
        };
    });

    it.skip(`Component triggers the onBlurHandler (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput onBlurHandler={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            fireEvent.blur(charInputElement);
            expect(charInputElement.onblur).to.eq(null);

            unmount();
        };
    });

    it(`Component receives the wrong id prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput id={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.id).to.eq(`${wrongInput[i]}`);

            unmount();
        };
    });

    it(`Component receives the wrong name prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput name={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.name).to.eq(`${wrongInput[i]}`);

            unmount();
        };
    });

    it(`Component receives the wrong value prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput defaultValue={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.value).to.eq(`${wrongInput[i]}`);

            unmount();
        };
    });

    it(`Component receives the wrong min prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput min={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.min).to.eq(`${wrongInput[i]}`);

            unmount();
        };
    });

    it(`Component receives the wrong max prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput max={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.max).to.eq(`${wrongInput[i]}`);

            unmount();
        };
    });

    it(`Component receives the wrong onChangeHandler prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "function") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput onChangeHandler={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.onchange).to.eq(null);

            unmount();
        };
    });

    it(`Component receives the wrong onFocusHandler prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput onFocusHandler={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.onfocus).to.eq(null);

            unmount();
        };
    });

    it(`Component receives the wrong onBlurHandler prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput onBlurHandler={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.onblur).to.eq(null);

            unmount();
        };
    });

    it(`Component receives the wrong readOnly prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput readOnly={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.readOnly).to.eq(wrongInput[i] ? true : false);

            unmount();
        };
    });

    it(`Component receives the wrong disabled prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<CharInput disabled={wrongInput[i]}/>);

            const charInputElement: HTMLInputElement = screen.getByRole("charInput");
            expect(charInputElement.disabled).to.eq(wrongInput[i] ? true : false);

            unmount();
        };
    });
});
