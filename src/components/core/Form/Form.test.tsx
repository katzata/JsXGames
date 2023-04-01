import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe("Form component", () => {
    const methods = ["GET", "POST"];
    const url = "www.yay.com";
    const testIterations: number = 3;
    let testResult: FormData;
    const testString = (type: string, index: number): string => `Test ${type} ${index}`;
    const children = (num: number): JSX.Element[] => [...Array(3 * num).fill(1).map((_, idx: number) => <input name={`${num}`} key={idx}/>)];
    const testCallback = (offset: FormData): void => {
        testResult = offset;
    };

    window.HTMLFormElement.prototype.scrollTo = () => {};
    const wrongInput = ["", 1, undefined, [], null, Infinity, NaN];

    it(`Component receives the appropriate props (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const disabled = i % 2 === 0;
            const title = testString("title", i);
            const submitButtonContent = testString("X", i);

            const component = <Form
                method={methods[i % 2]}
                url={url}
                title={title}
                target="_" submitButtonContent={submitButtonContent}
                submitHandler={testCallback}
                disabled={disabled}
            >
                <>{children(i)}</>
            </Form>;

            expect(component.props.method).to.eq(methods[i % 2]);
            expect(component.props.url).to.eq(url);
            expect(component.props.title).to.eq(title);
            expect(component.props.disabled).to.eq(disabled);
            expect(component.props.submitButtonContent).to.eq(submitButtonContent);
            expect(typeof component.props.submitHandler).to.eq("function");
            expect(component.props.children.props.children.length).to.eq(3 * i);

            component.props.children.props.children.forEach((child: JSX.Element) => {
                expect(child.type).to.eq("input");
            });
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const url = `www.yay${i}.com`;
            const title = testString("title", i);
            const submitButtonContent = testString("X", i);

            const { unmount } = render(<Form method={methods[i % 2]} url={url} title={title} submitButtonContent={submitButtonContent} submitHandler={testCallback}>
                <>{children(i)}</>
            </Form>);

            const formElement: HTMLFormElement = screen.getByRole("form");
            const fieldsetElement = Array.from(formElement.children)[0];
            const childElements = Array.from(fieldsetElement.children);
            const passedChildren = childElements.slice(2, childElements.length - 1);

            expect(formElement).toBeTruthy();
            expect(formElement.method.toLocaleUpperCase()).to.eq(methods[i % 2]);
            expect(formElement.action).to.eq(`http://localhost:3000/${url}`);
            expect(fieldsetElement.tagName).to.eq("FIELDSET");
            expect(childElements.length).to.eq(2 + (3 * i));

            expect(childElements[0].tagName).to.eq("LEGEND");
            expect(childElements[0].textContent).to.eq(title);
            expect(childElements[childElements.length - 1].tagName).to.eq("BUTTON");
            expect(childElements[childElements.length - 1].textContent).to.eq(submitButtonContent);

            for (let j = 0; j < passedChildren.length; j++) {
                expect(passedChildren[j].tagName).to.eq("INPUT");
                expect((passedChildren[j] as HTMLInputElement).name).to.eq(`${i}`);
            };

            unmount();
        };
    });

    it(`Component invokes the callback function appropriately (${testIterations} iterations)`, () => {
        const { unmount } = render(<Form submitHandler={testCallback}>
            {[0, 1, 2].map(el => <><input name={`input${el}`} key={el}/></>)}
        </Form>);

        const formElement: HTMLFormElement = screen.getByRole("form");
        const childElements = Array.from(formElement.children);
        childElements.pop();
        const expectedInput: string[] = [];

        for (let i = 0; i < childElements.length; i++) {
            expectedInput.push(`input${i}`);
            fireEvent.change(childElements[i], {target: {value: expectedInput[i]}});
        };

        fireEvent.submit(formElement);

        for (let i = 0; i < childElements.length; i++) {
            expect(testResult.get(expectedInput[i])).to.eq(expectedInput[i]);
        };

        unmount();
    });

    it(`Component receives the wrong title prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<Form title={wrongInput[i]}></Form>);

            const formElement: HTMLFormElement = screen.getByRole("form");
            const fieldset = Array.from(formElement.children)[0];
            const title = Array.from(fieldset.children)[0];

            expect(title.textContent).to.eq(`${wrongInput[i] ? wrongInput[i] : "GO"}`);

            unmount();
        };
    });

    it(`Component receives the wrong method prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<Form method={wrongInput[i]}></Form>);

            const formElement: HTMLFormElement = screen.getByRole("form");
            expect(formElement.method).to.eq("get");

            unmount();
        };
    });

    it(`Component receives the wrong url prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<Form title={wrongInput[i]}></Form>);

            const formElement: HTMLFormElement = screen.getByRole("form");
            expect(formElement.action).to.eq("http://localhost:3000/");

            unmount();
        };
    });

    it(`Component receives the wrong callback prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <Form getScrollOffset={wrongInput[i]}></Form>;
            const { unmount } = render(component);

            const formElement: HTMLFormElement = screen.getByRole("form");
            expect(formElement.onscroll).to.eq(null);

            unmount();
        };
    });

    it(`Component receives the wrong children prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            try {
                // @ts-expect-error
                const component = <Form>{wrongInput[i]}</Form>;
                const { unmount } = render(component);
                const formElement: HTMLFormElement = screen.getByRole("form");
                expect(Array.from(formElement.children) instanceof Array).to.eq(true);
                unmount();
            } catch (err: any) {
                expect(err.message).to.eq("Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.")
            }
        };
    });
});
