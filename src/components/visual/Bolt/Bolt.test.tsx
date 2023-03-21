import { render, screen } from "@testing-library/react";
import Bolt from "./Bolt";

describe("Bolt", () => {
    it("Displays correctly", () => {
        render(<Bolt />);
        const bolt = screen.getByRole("bolt");

        expect(bolt).toHaveAttribute("width", "90px");
        expect(bolt).toHaveAttribute("height", "90px");
        expect(bolt).toHaveAttribute("viewBox", "0 0 180 180");
    });
});