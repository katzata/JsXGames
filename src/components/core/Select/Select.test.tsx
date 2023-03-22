import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Select from "./Select";

describe("Select component", () => {
    const testIterations: number = 3
    let eventType: string | undefined = undefined;
    let eventTarget: HTMLSelectElement | undefined = undefined;

    const resetResults = (): void => {
        eventType = undefined;
        eventTarget = undefined;
    };

    const testFunction = (e: React.SyntheticEvent): void => {
        eventType = e.type;
        eventTarget = e.target as HTMLSelectElement;
    };
    const options: Array<Array<string>> = [["option1", "value1"], ["option2", "value2"], ["option3", "value3"]]
    const testData = [
        {id: "id1", name: "name1", defaultValue: "defaultValue1", options, testFunction},
        {id: "id2", name: "name2", defaultValue: "defaultValue2", options, testFunction},
        {id: "id3", name: "name3", defaultValue: "defaultValue3", options, testFunction}
    ];
    const wrongInput = ["", 1, undefined, [], {}];

    it(`Component receives the appropriate props (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const component = <Select
                id={testData[i].id}
                name={testData[i].name}
                options={testData[i].options}
                defaultValue={testData[i].defaultValue}
                changeHandler={testFunction}
            />;

            expect(component.props.id).to.eq(testData[i].id);
            expect(component.props.name).to.eq(testData[i].name);
            expect(component.props.options).to.eq(testData[i].options);
            expect(component.props.defaultValue).to.eq(testData[i].defaultValue);
            expect(typeof component.props.changeHandler).to.eq("function");
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const { unmount } = render(<Select
                id={testData[i].id}
                name={testData[i].name}
                options={testData[i].options}
                defaultValue={options[i][1]}
                changeHandler={testFunction}
            />);
            const selectElement: HTMLSelectElement = screen.getByRole("select");
            const optionElements = Array.from(selectElement.options);

            expect(selectElement.tagName).to.eq("SELECT");
            expect(selectElement.id).to.eq(testData[i].id);
            expect(selectElement.name).to.eq(testData[i].name);
            expect(selectElement.value).to.eq(options[i][1]);


            for (let j = 0; j < optionElements.length; j++) {
                expect(optionElements[j].textContent).to.eq(options[j][0]);
                expect(optionElements[j].value).to.eq(options[j][1]);
            };

            unmount();
        };
    });

    it(`Component changes values appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const { unmount } = render(<Select
                id={testData[i].id}
                name={testData[i].name}
                options={testData[i].options}
                defaultValue={options[i][1]}
                changeHandler={testFunction}
            />);
            const selectElement: HTMLSelectElement = screen.getByRole("select");
            const selectedValue = i + 1 < testIterations ? i + 2 : 1;
            const expectedValue = `value${selectedValue}`;

            fireEvent.change(selectElement, { target: { value: expectedValue } });

            expect(selectElement.value).to.eq(expectedValue);
            expect(eventTarget instanceof EventTarget).to.eq(true);
            expect(eventTarget!.value).to.eq(expectedValue);

            expect(eventType).to.eq("change");

            unmount();
        };
    });

    it(`Component receives the wrong id prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <Select id={wrongInput[i]}/>
            const { unmount } = render(component);

            const selectElement: HTMLSelectElement = screen.getByRole("select");

            expect(selectElement.id).to.eq(`${wrongInput[i]}`);
            unmount();
        };
    });

    it(`Component receives the wrong name prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <Select name={wrongInput[i]}/>
            const { unmount } = render(component);

            const selectElement: HTMLSelectElement = screen.getByRole("select");

            expect(selectElement.name).to.eq(`${wrongInput[i]}`);
            unmount();
        };
    });

    it(`Component receives the wrong options prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <Select options={wrongInput[i]}/>
            const { unmount } = render(component);

            const selectElement: HTMLSelectElement = screen.getByRole("select");

            expect(Array.from(selectElement.options).length).to.eq(0);
            unmount();
        };
    });

    it(`Component receives the wrong defaultValue prop (${wrongInput.length} iterations)`, () => {
        resetResults();

        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <Select defaultValue={wrongInput[i]}/>
            const { unmount } = render(component);
            const selectElement: HTMLSelectElement = screen.getByRole("select");

            expect(selectElement.value).to.eq("");
            unmount();
        };
    });

    it(`Component receives the wrong changeHandler prop (${wrongInput.length} iterations)`, () => {
        resetResults();

        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <Select changeHandler={wrongInput[i]}/>
            const { unmount } = render(component);
            const selectElement: HTMLSelectElement = screen.getByRole("select");

            fireEvent.change(selectElement, { target: { value: "value2" } });

            expect(eventType).toBe(undefined);
            expect(eventTarget).toBe(undefined);

            unmount();
        };
    });
});