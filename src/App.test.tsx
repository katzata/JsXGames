import { render, screen } from "@testing-library/react"

import App from "./App"

describe("App", () => {
    it("Renders the app", () => {
        render(<App />);
        expect(screen.getByText("YAY"));
    });
});