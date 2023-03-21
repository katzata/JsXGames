import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon component", () => {
    const iconsList: Array<Array<string>> = [
        ["addFriend", "0 -24 512 511"],
        ["block", "0 0 448 448"],
        ["chat", "0 0 30.743 30.744"],
        ["chevronUp", "0 0 438.533 438.533"],
        ["close", "0 0 93.934 93.934"],
        ["doubleArrow", "0 0 611.996 611.996"],
        ["favorites", "0 0 50 50"],
        ["filter", "0 0 57 57"],
        ["forum", "0 0 504.124 504.124"],
        ["friends", "0 0 60 60"],
        ["games", "0 0 504.079 504.079"],
        ["info", "0 0 45.395 45.395"],
        ["link", "0 0 24 24"],
        ["mail", "0 0 485.211 485.211"],
        ["onOff", "0 0 512 512"],
        ["password", "0 0 490.4 490.4"],
        ["rankings", "0 0 504.123 504.123"],
        ["search", "0 0 30.239 30.239"],
        ["settings", "0 0 512 512"],
        ["toggleArrow", "0 0 415.346 415.346"],
        ["user", "0 0 490 490"]
    ];

    it("Component receives the appropriate props and renders accordingly", () => {
        for (const [icon, expected] of iconsList) {
            const component = <Icon current={icon}/>;
            const { unmount } = render(component);
            const iconElement = screen.getByRole("icon");

            expect(component.props.current).to.eq(icon);
            expect(iconElement).toHaveAttribute("viewBox", expected)
            unmount();
        };
    });
});