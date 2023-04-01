import { render, screen } from "@testing-library/react";
import Link from "./Link";

describe("Link component", () => {
    const target = ["_blank", "_self"];
    const url = "www.google.com";
    const testIterations: number = 3;

    const testString = (type: string, index: number): string => `Test ${type} ${index}`;
    const children = (num: number): JSX.Element[] => [...Array(3 * num).fill(1).map((_, idx: number) => <span key={idx}></span>)];


    window.HTMLLinkElement.prototype.scrollTo = () => {};
    const wrongInput = ["", 1, undefined, [], null, Infinity, NaN];

    it(`Component receives the appropriate props (${testIterations} iterations)`, () => {
        for (let i = 1; i <= testIterations; i++) {
            const component = <Link url={url} target={target[i % 2]}>
                <>{children(i)}</>
            </Link>;

            expect(component.props.url).to.eq(url);
            expect(component.props.target).to.eq(target[i % 2]);

            component.props.children.props.children.forEach((child: JSX.Element) => {
                expect(child.type).to.eq("span");
            });
        };
    });

    it(`Component renders appropriately (${testIterations} iterations)`, () => {
        for (let i = 0; i < testIterations; i++) {
            const { unmount } = render(<Link url={url + i} target={target[i % 2]}>
                <span></span>
            </Link>);

            const linkElement: HTMLLinkElement = screen.getByRole("link");
            const childElements = Array.from(linkElement.children);

            expect(linkElement).toBeTruthy();
            expect(linkElement.href).to.eq(`http://localhost:3000/${url + i}`);
            expect(linkElement.target).to.eq(target[i % 2]);
            expect(childElements.length).to.eq(1);
            expect(childElements[0].tagName).to.eq("SPAN");

            unmount();
        };
    });

    it(`Component receives the wrong url prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<Link url={wrongInput[i]}></Link>);

            const LinkElement: HTMLLinkElement = screen.getByRole("link");

            expect(LinkElement.href).to.eq(`http://localhost:3000/${wrongInput[i]}`);

            unmount();
        };
    });

    it(`Component receives the wrong target prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < target.length; i++) {
            if (typeof wrongInput[i] === "string") continue;
            // @ts-expect-error
            const { unmount } = render(<Link target={wrongInput[i]}></Link>);

            const LinkElement: HTMLLinkElement = screen.getByRole("link");
            expect(LinkElement.target).to.eq(`${wrongInput[i]}`);

            unmount();
        };
    });

    it(`Component receives the wrong children prop (${wrongInput.length} iterations)`, () => {
        for (let i = 0; i < wrongInput.length; i++) {
            try {
                const component = <Link>{wrongInput[i]}</Link>;
                const { unmount } = render(component);
                const linkElement: HTMLLinkElement = screen.getByRole("link");

                expect(Array.from(linkElement.children) instanceof Array).to.eq(true);

                unmount();
            } catch (err: any) {
                expect(err.message).to.eq("Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.")
            }
        };
    });
});