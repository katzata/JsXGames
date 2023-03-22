import { render, screen, fireEvent } from "@testing-library/react";
import RadioButtons from "./RadioButtons";
import React from "react";

describe("RadioButtons component", () => {
    const testIterations: number = 3;
    let testResult: HTMLInputElement | undefined;
    const testData = {
        id: "testId",
        name: "testName",
        options: ["option1", "option2", "option3"],
        defaultValue: "option",
        changeHandler: (e: React.ChangeEvent) => {
            testResult = e.target as HTMLInputElement;
        }
    };
    const wrongInput = ["", 1, undefined, [], {}];

    const resetResults = (): void => { testResult = undefined };
    const resetOptions = (): void => {
        testData.options = ["option1", "option2", "option3"];
    };

    it(`Component receives the appropriate props (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const component = <RadioButtons
                id={testData.id + i}
                name={testData.name + i}
                options={testData.options}
                defaultValue={testData.defaultValue + i}
                changeHandler={() => {}}
            />;

            expect(component.props.id).to.eq(testData.id + i);
            expect(component.props.name).to.eq(testData.name + i);
            expect(component.props.options).to.eq(testData.options);
            expect(component.props.defaultValue).to.eq(testData.defaultValue + i);
            expect(typeof component.props.changeHandler).to.eq("function");
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const { unmount } = render(<RadioButtons
                id={testData.id + i}
                name={testData.name + i}
                options={testData.options}
                defaultValue={testData.defaultValue + (i + 1)}
                changeHandler={testData.changeHandler}
            />);
            const radioButtonElements: HTMLInputElement[] = screen.getAllByRole("radioButton");
            const buttonsLength = radioButtonElements.length;
            expect(buttonsLength).to.eq(testData.options.length);

            for (let j = 0; j < buttonsLength; j++) {
                const buttonEl = radioButtonElements[j];

                expect(buttonEl.tagName).to.eq("INPUT");

                if (testData.options[j] === testData.defaultValue + (i + 1)) {
                    expect(buttonEl.checked).to.eq(true);
                } else {
                    expect(buttonEl.checked).to.eq(false);
                };
            };

            unmount();
            testData.options.push(`option${testData.options.length + 1}`);
        };

        resetOptions();
    });

    it(`Component changes values appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testData.options.length; i++) {
            const { unmount } = render(<RadioButtons
                id={testData.id + i}
                name={testData.name + i}
                options={testData.options}
                changeHandler={testData.changeHandler}
            />);
            const radioButtonElements: HTMLInputElement[] = screen.getAllByRole("radioButton");

            fireEvent.click(radioButtonElements[i] as HTMLInputElement);

            for (let j = 0; j < radioButtonElements.length; j++) {
                if (j === i) {
                    expect(radioButtonElements[j].checked).to.eq(true);
                } else {
                    expect(radioButtonElements[j].checked).to.eq(false);
                };

                expect(testResult!.tagName).to.eq("INPUT");
                expect(testResult!.value).to.eq(testData.options[i]);
            };

            unmount();
        };

        resetResults();
    });

    it(`Component receives the wrong id prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <RadioButtons id={wrongInput[i]}/>
            const { unmount } = render(component);

            const radioButtonsContainer: HTMLDivElement = screen.getByRole("radioButtonsContainer");

            expect(radioButtonsContainer.id).to.eq(`${wrongInput[i]}`);
            unmount();
        };
    });

    it(`Component receives the wrong name prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <RadioButtons options={testData.options} name={wrongInput[i]}/>
            const { unmount } = render(component);

            const radioButtonElements: HTMLInputElement[] = screen.getAllByRole("radioButton");

            for (const buttonEl of radioButtonElements) {
                expect(buttonEl.name).to.eq(`${wrongInput[i]}`);
            };

            unmount();
        };
    });

    it(`Component receives the wrong options prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <RadioButtons options={wrongInput[i]}/>
            const { unmount } = render(component);

            const radioButtonsContainer: HTMLDivElement = screen.getByRole("radioButtonsContainer");

            expect(radioButtonsContainer.children.length).to.eq(0);
            unmount();
        };
    });

    it(`Component receives the wrong defaultValue prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <RadioButtons options={testData.options} defaultValue={wrongInput[i]}/>
            const { unmount } = render(component);

            const radioButtonElements: HTMLInputElement[] = screen.getAllByRole("radioButton");

            for (const buttonEl of radioButtonElements) {
                expect(buttonEl.checked).to.eq(false);
            };

            unmount();
        };
    });

    it(`Component receives the wrong changeHandler prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <RadioButtons options={testData.options} changeHandler={wrongInput[i]}/>
            const { unmount } = render(component);
            const radioButtonElements: HTMLInputElement[] = screen.getAllByRole("radioButton");

            for (const buttonEl of radioButtonElements) {
                fireEvent.click(buttonEl);

                expect(testResult).toBe(undefined);
            };

            unmount();
        };
    });
});