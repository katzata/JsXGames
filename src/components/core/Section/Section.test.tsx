import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Section component", () => {
    const testIterations: number = 3
    const testElements: JSX.Element[] = [
        <p>Paragraph</p>,
        <span>Span</span>,
        <div>Div</div>
    ];

    it(`Component receives the appropriate props (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const component = <Section title={`Test title ${i}`}>{testElements[i]}</Section>;

            expect(component.props.title).to.eq(`Test title ${i}`);
            expect(component.props.children.type).to.eq(testElements[i].type);
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const component = <Section title={`Test title ${i}`}>{testElements[i]}</Section>;
            const { unmount } = render(component);
            const titleElement = screen.getByText(`Test title ${i}`);
            const childElement = screen.getByText(testElements[i].props.children);

            expect(titleElement).toBeTruthy();
            expect(titleElement.tagName).to.eq("H3");
            expect(childElement.textContent).toBeTruthy();
            expect(childElement.tagName).to.eq(testElements[i].type.toLocaleUpperCase());

            unmount();
        };
    });
});