import { render, screen, fireEvent } from "@testing-library/react";
import Article from "./Article";

describe("Article component", () => {
    const testIterations: number = 3;
    let testResult: number;
    const children = (num: number): JSX.Element[] => [...Array(3 * num).fill(1).map((_, idx: number) => <span key={idx}>child{idx}</span>)];
    const testCallback = (offset: number): void => {
        testResult = offset;
    };

    window.HTMLElement.prototype.scrollTo = () => {};
    const wrongInput = ["", 1, undefined, [], {}, null, Infinity, NaN, () => {}];

    const testString = (type: string, index: number): string => `Test ${type} ${index}`;

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const title = testString("title", i);
            const text = testString("text", i);

            const { unmount } = render(<Article title={title} text={text} scrollOffset={i} getScrollOffset={testCallback}>
                <>{children(i)}</>
            </Article>);

            const articleElement: HTMLElement = screen.getByRole("article");
            const childElements = Array.from(articleElement.children);
            const passedChildren = childElements.slice(2);

            expect(articleElement).toBeTruthy();
            expect(childElements.length).to.eq(2 + (3 * i));

            expect(childElements[0].tagName).to.eq("H4");
            expect(childElements[0].textContent).to.eq(title);
            expect(childElements[1].tagName).to.eq("P");
            expect(childElements[1].textContent).to.eq(text);

            for (let i = 0; i < passedChildren.length; i++) {
                expect(passedChildren[i].tagName).to.eq("SPAN");
                expect(passedChildren[i].textContent).to.eq(`child${i}`);
            };

            unmount();
        };
    });

    it.skip(`Component gets scrolled appropriately (${testIterations} iterations)`, () => {
        for (let i = 1; i < testIterations; i++) {
            const { unmount } = render(<Article scrollOffset={i * 10} getScrollOffset={testCallback}>
                <>{children(i * 50)}</>
            </Article>);

            const articleElement: HTMLElement = screen.getByRole("article");
            // console.log(children(i * 50));

            fireEvent.scroll(articleElement, { target: { scrollY: 100 } });
            console.log(Array.from(articleElement.children));
            console.log(articleElement.scrollTop);

            // expect(articleElement.scrollTop).to.eq(100)
            unmount();
        };
    });

    it(`Component invokes the callback function appropriately (${testIterations} iterations)`, () => {
        const { unmount } = render(<Article scrollOffset={0} getScrollOffset={testCallback}>
            <>{children(1 * 10)}</>
        </Article>);

        const articleElement: HTMLElement = screen.getByRole("article");

        expect(testResult).to.eq(undefined);
        fireEvent.scroll(articleElement, { target: { scrollY: 100 } });
        expect(testResult).to.eq(0);

        unmount();
    });

    it(`Component receives the title prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<Article title={wrongInput[i]}></Article>);

            const articleElement: HTMLDivElement = screen.getByRole("article");
            const title = Array.from(articleElement.children)[0];

            expect(title).to.eq(undefined);

            unmount();
        };
    });

    it(`Component receives the wrong text prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<Article text={wrongInput[i]}></Article>);

            const articleElement: HTMLDivElement = screen.getByRole("article");
            const text = Array.from(articleElement.children)[1];

            expect(text).to.eq(undefined);

            unmount();
        };
    });

    it(`Component receives the wrong scrollOffset prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (wrongInput[i] instanceof Number === true) continue;
            // @ts-expect-error
            const { unmount } = render(<Article scrollOffset={wrongInput[i]}></Article>);

            const articleElement: HTMLDivElement = screen.getByRole("article");
            expect(articleElement.scrollTop).to.eq(0);

            unmount();
        };
    });

    it(`Component receives the wrong callback prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            // @ts-expect-error
            const component = <Article getScrollOffset={wrongInput[i]}></Article>;
            const { unmount } = render(component);

            const articleElement: HTMLDivElement = screen.getByRole("article");
            expect(articleElement.onscroll).to.eq(null);

            unmount();
        };
    });

    it(`Component receives the wrong children prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (wrongInput[i] instanceof Object === true) continue;

            try {
                // @ts-expect-error
                const component = <Article>{wrongInput[i]}</Article>;
                const { unmount } = render(component);
                const articleElement: HTMLDivElement = screen.getByRole("article");
                expect(Array.from(articleElement.children) instanceof Array).to.eq(true);
                unmount();
            } catch (err: any) {
                expect(err.message).to.eq("Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.")
            }
        };
    });
});
