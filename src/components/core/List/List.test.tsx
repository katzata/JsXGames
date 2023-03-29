import { render, screen, fireEvent } from "@testing-library/react";
import List from "./List";

describe("List component", () => {
    const testIterations: number = 2;
    let testResult: number/* HTMLInputElement | undefined */;
    const children = (num: number): JSX.Element[] => [...Array(3 * num).fill(1).map((_, idx: number) => <p key={idx}>p{idx}</p>)];
    const testCallback = (offset: number): void => {
        testResult = offset;
    };

    window.HTMLElement.prototype.scrollTo = () => {};
    const wrongInput = ["", 1, undefined, [], {}, null, Infinity, NaN, () => {}];

    // const resetResults = (): void => { testResult = undefined };
    // const resetOptions = (): void => {
    //     // testData.options = ["option1", "option2", "option3"];
    // };

    it(`Component receives the appropriate props (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const component = <List scrollOffset={i} getScrollOffset={testCallback}>
                <>{children(i)}</>
            </List>;

            expect(component.props.scrollOffset).to.eq(i);
            expect(typeof component.props.getScrollOffset).to.eq("function");
            expect(component.props.children.props.children.length).to.eq(3 * i);

            component.props.children.props.children.forEach((child: JSX.Element) => {
                expect(child.type).to.eq("p");
            });
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const { unmount } = render(<List scrollOffset={i} getScrollOffset={testCallback}>
                <>{children(i)}</>
            </List>);

            const listElement: HTMLUListElement = screen.getByRole("list");
            const childElements = Array.from(listElement.children);

            expect(listElement).toBeTruthy();
            expect(childElements.length).to.eq(3 * i);

            for (let j = 0; j < childElements.length; j++) {
                expect(childElements[j].tagName).to.eq("LI");
                const passedChildren = Array.from(childElements[j].children);

                for (const passedChild of passedChildren) {
                    expect(passedChild.textContent).to.eq(`p${j}`);
                };
            };

            unmount();
        };
    });

    // it.only(`Component gets scrolled appropriately (${testIterations} iterations)`, () => {
    //     for (let i = 1; i < testIterations; i++) {
    //         const { unmount } = render(<List scrollOffset={i * 10} getScrollOffset={testCallback}>
    //             <>{children(i * 50)}</>
    //         </List>);

    //         const listElement: HTMLUListElement = screen.getByRole("list");
    //         // console.log(children(i * 50));

    //         fireEvent.scroll(listElement, { target: { scrollY: 100 } });
    //         console.log(Array.from(listElement.children));
    //         console.log(listElement.scrollTop);

    //         // expect(listElement.scrollTop).to.eq(100)
    //         unmount();
    //     };
    // });

    it(`Component invokes the callback function appropriately (${testIterations} iterations)`, () => {
        const { unmount } = render(<List scrollOffset={0} getScrollOffset={testCallback}>
            <>{children(1 * 10)}</>
        </List>);

        const listElement: HTMLUListElement = screen.getByRole("list");

        expect(testResult).to.eq(undefined);
        fireEvent.scroll(listElement, { target: { scrollY: 100 } });
        expect(testResult).to.eq(0);

        unmount();
    });

    it(`Component receives the wrong scrollOffset prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (wrongInput[i] instanceof Number === true) continue;
            // @ts-expect-error
            const { unmount } = render(<List scrollOffset={wrongInput[i]} getScrollOffset={testCallback}></List>);

            const listElement: HTMLDivElement = screen.getByRole("list");
            expect(listElement.scrollTop).to.eq(0);

            unmount();
        };
    });

    it(`Component receives the wrong callback prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // if (wrongInput[i] instanceof Function === true) continue;
            // @ts-expect-error
            const component = <List scrollOffset={0} getScrollOffset={wrongInput[i]}></List>;
            const { unmount } = render(component);

            const listElement: HTMLDivElement = screen.getByRole("list");
            expect(listElement.onscroll).to.eq(null);

            unmount();
        };
    });

    it(`Component receives the wrong children prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (wrongInput[i] instanceof Array === true) continue;

            // @ts-expect-error
            const { unmount } = render(<List scrollOffset={0} getScrollOffset={testCallback}>{wrongInput[i]}</List>);

            const listElement: HTMLDivElement = screen.getByRole("list");
            expect(Array.from(listElement.children) instanceof Array).to.eq(true);

            unmount();
        };
    });
});